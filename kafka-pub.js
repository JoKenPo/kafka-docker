import kafka from "kafka-node";

const user = new kafka.KafkaClient({
  kafkaHost: 'localhost:9092'
});

const producer = new kafka.Producer(user);

producer.on('ready', () => {
  const payload = [
    {
      topic: 'BULKER_SENDER_EVENT',
      messages: 'Hello!'
    }
  ];

  producer.send(payload, (error, data) => {
    if (error) {
      console.error('Error in publishing message:', error);
    } else {
      console.log('Message successfully published:', data);
    }
  });
});

producer.on('error', (error) => {
  console.error('Error connecting to Kafka:', error);
});
