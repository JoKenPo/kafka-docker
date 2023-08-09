import kafka from "kafka-node"

const client = new kafka.KafkaClient({
  kafkaHost: "127.0.0.1:2181"
});

const topics = [
    {
        topic: "BULKER_SENDER_EVENT"
    }
];
const options = {
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    encoding: "buffer",
    kafkaHost: "127.0.0.1:2181"
};

const consumer = new kafka.ConsumerGroup(options, topics);

consumer.on("message", function(message) {

    // Read string into a buffer.
    var buf = new Buffer(message.value, "binary"); 
    var decodedMessage = JSON.parse(buf.toString());

    //Events is a Sequelize Model Object. 
    return Events.create({
        id: decodedMessage.id,
        type: decodedMessage.type,
        userId: decodedMessage.userId,
        sessionId: decodedMessage.sessionId,
        data: JSON.stringify(decodedMessage.data),
        createdAt: new Date()
    });
});

consumer.on("error", function(err) {
    console.log("error", err);
});

process.on("SIGINT", function() {
    consumer.close(true, function() {
        process.exit();
    });
});