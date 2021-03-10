const amqp = require("amqplib"); // amqp lib for rabbitmq protocol

connect(); //calling method connect
async function connect() { // async call

    try {
        const amqpServer = "amqp://localhost:5672";
        const connection = await amqp.connect(amqpServer); // create connection
        const channel = await connection.createChannel(); // create conssumer channel
        await channel.assertQueue("cars"); //queue from where to consume
        
        channel.consume("cars", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Recieved job with input ${input.number}`); // when a msg comes in print the msg
                channel.ack(message); // ack the message so that it can be removed or dequeued
        })

        console.log("Waiting for messages..."); // not closing the connection, unlike publisher so that it can be available and consume msg when pushed
    
    }
    catch (ex){
        console.error(ex);
    }

}