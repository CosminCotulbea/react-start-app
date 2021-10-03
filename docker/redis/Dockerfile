FROM redis

ARG REDIS_PASSWORD
ARG REDIS_PORT

ENV REDIS_PASSWORD $REDIS_PASSWORD

EXPOSE $REDIS_PORT

CMD ["sh", "-c", "exec redis-server --requirepass \"$REDIS_PASSWORD\""]
