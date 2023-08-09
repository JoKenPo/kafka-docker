import kafka from "kafka-node";

const user = new kafka.KafkaClient({
  kafkaHost: 'localhost:9092'
});

user.on('ready', () => {
  console.log('Kafka Connected');
});

user.on('error', (error) => {
  console.error('Error connecting to Kafka:', error);
});
