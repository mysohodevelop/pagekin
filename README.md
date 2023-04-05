
# docker compose를 이용해서 container 생성
docker-compose up -d --build

# 끄기
docker-compose down

# docker images, container 모두 삭제
docker system prune -a

# 리눅스 종류 확인
grep . /etc/*-release
