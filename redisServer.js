require('dotenv').config({
    path: __dirname + '/.env'
});

const REDIS = {
    'host': process.env.REDIS_HOST,
    'port': process.env.REDIS_PORT,
    'password': process.env.REDIS_PASSWORD,
    'family': 4
};

function handler(request, response) {
    response.writeHead(200);
    response.end('');
}

try {
    let app;

    if (process.env.APP_ENV === 'local') {
        app = require('http').createServer({}, handler);
    } else {
        let fs = require('fs');

        let options = {
            key: fs.readFileSync('/etc/certs/' + process.env.VIRTUAL_HOSTS + '.key').toString(),
            cert: fs.readFileSync('/etc/certs/' + process.env.VIRTUAL_HOSTS + '.crt').toString()
        };

        app = require('https').createServer(options, handler);
    }

    app.listen(REDIS.port, function() {
        if (process.env.APP_DEBUG) {
            console.log(new Date, '[Redis]Server is running on port ' + REDIS.port);
        }
    });

    try {
        let io = require('socket.io')(app, {log: false, origins: '*:*'});

        io.on('connection', function(socket) {
            if (process.env.APP_DEBUG) {
                console.log(new Date, '[Redis]Connected to Socket', socket.id);
            }
        });

        try {
            let ioredis = require('ioredis');
            let redis = new ioredis(REDIS);

            if (process.env.APP_DEBUG) {
                console.log(new Date, '[Redis]Connect to Redis server on port ' + REDIS.port);
            }

            try {
                redis.psubscribe('*', function(error, count) {
                    if (process.env.APP_DEBUG) {
                        console.log(new Date, '[Redis]Server is listening for broadcasted messages');
                    }
                });

                redis.on('pmessage', function(subscribed, channel, data) {
                    let json = JSON.parse(data);

                    if (process.env.APP_DEBUG) {
                        console.log(new Date, channel + ':' + json.event, json.data);
                    }

                    io.emit(channel, {type: json.event, data: json.data});
                });
            } catch (err) {
                console.log(new Date, '[Redis]Error receiving message');
                process.exit(1);
            }
        } catch (err) {
            console.log(new Date, '[Redis]Cannot connect to Redis server on ' + REDIS.port);
            process.exit(1);
        }
    } catch (err) {
        console.log(new Date, '[Redis]Cannot connect to Socket', err);
        process.exit(1);
    }
} catch (err) {
    console.log(new Date, '[Redis]Server failed to run on port ' + REDIS.port);
    process.exit(1);
}
