#Colinha

#Listando dockers
docker ps

#Entrando no docker
docker exec -it kafka /bin/sh

#Acessando pasta
cd opt/kafka_2.13-2.8.1/bin

#listando topics
kafka-topics.sh --list --zookeeper zookeeper:2181

#

docker run -d -p 8888:80 docker/getting-started
http://localhost:8888/tutorial/

kafka-topics.sh --zookeeper localhost:2181 --topic BULKER_SENDER_EVENT --create --partitions 3 --replication-factor 1 kafka-topics.sh --command-config security.protocol=SSL
kafka-topics.sh --zookeeper localhost:9092 --topic BULKER_SENDER_EVENT --create --partitions 3 --replication-factor 1
kafka-topics.sh --bootstrap-server 127.0.0.1:9092 --topic BULKER_SENDER_EVENT --create --partitions 3 --replication-factor 1
