const amqp = require("amqplib"); // rabitmq protocal

const msg = {number: process.argv[2]} // takes from argument of cmdline Ex: npm run publish BMW
connect();
async function connect() { //async func

    try {
        const amqpServer = "amqp://localhost:5672" 
        const connection = await amqp.connect(amqpServer); //connection to rabbitmq on mySystem at 5672 port
        const channel = await connection.createChannel(); // creating channel for communication
        await channel.assertQueue("cars"); //queue name cars
        await channel.sendToQueue("cars", Buffer.from(JSON.stringify(msg))) //posting msg to cars q
        console.log(`Job sent successfully ${msg.number}`);
        await channel.close(); //close channel
        await connection.close(); //close connection
    }
    catch (ex){
        console.error(ex)
    }

}