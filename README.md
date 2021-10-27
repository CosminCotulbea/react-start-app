# Environment

### Requirements
1) Docker (`with WSL preferably because otherwise you have to change Dockerfile or use without Docker`)
2) Nginx by Ion Ghitun https://github.com/ionghitun/nginx-proxy

### Optionals
- API (`I used for testing an API from Ion Ghitun but any can be used`)
- https://github.com/ionghitun/lumen-start-app

# Install instructions
1) First you have to up the nginx container
2) Create an .env file and populate it with your settings following the model given as an example (.env.example)
3) Go to root folder and run `docker-compose up -d`
4) enter in container `./docker/console-app.sh`
5) inside of container `npm run dev`

## Inspiration
* https://github.com/ionghitun
