FROM mysql:5.7.18
ENV DEBIAN_FRONTEND=noninteractive

COPY my.cnf /etc/mysql/my.cnf
