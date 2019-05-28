#starting and stoping mongo

docker-compose -f docker/mongodb.yml up -d
docker-compose -f docker/mongodb.yml down


# starting project

npm run start

