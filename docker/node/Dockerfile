FROM node:stretch

USER root

RUN apt-get update && apt-get upgrade -y

WORKDIR /var/www

ARG USER_ID
ARG GROUP_ID

RUN if [ `id -u node` -eq ${USER_ID} ] ; then groupmod -g 1099 node && usermod -u 1099 -g 1099 node; fi

RUN userdel -f www-data
RUN if getent group www-data ; then groupdel www-data; fi
RUN groupadd -g ${GROUP_ID} www-data
RUN useradd -l -u ${USER_ID} -g www-data www-data
RUN chown -R www-data:www-data /var/www

RUN install -d -m 0755 -o www-data -g www-data /home/www-data
RUN chown -R www-data:www-data /home/www-data

RUN install -d -m 0755 -o www-data -g www-data /home/www-data
RUN chown -R www-data:www-data /home/www-data

RUN npm install -g pm2

COPY ./package*.json ./

#RUN npm install

COPY ./ ./

ENV PATH /var/www/node_modules/.bin:$PATH

USER www-data
