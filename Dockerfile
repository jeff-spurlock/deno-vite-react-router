FROM postgres:16-alpine

ENV POSTGRES_DB=devirr
ENV POSTGRES_USER=devirr
ENV POSTGRES_PASSWORD=devirr123

COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432 