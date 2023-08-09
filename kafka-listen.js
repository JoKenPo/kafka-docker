import kafka from "kafka-node";
// Configure Kafka consumer
const consumer = new kafka.Consumer(
  new kafka.KafkaClient({
    kafkaHost: 'localhost:9092'
  }),
  [{ topic: 'BULKER_SENDER_EVENT' }]
);


consumer.on('ready', () => {
  console.log('Kafka Connected');
});

// Consume messages from Kafka broker
consumer.on('message', function (message) {
  // Display the message
  console.log(message.value);
});