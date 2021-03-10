RABBITMQ-DEMO
--------------
This is a simple nodeJs project where we publish and consume msg using rabbitmq.

Requirements
-------------
Docker

Steps to run the application
-----------------------------
1. Docker setup: spin up rabbitmq container

docker run --name rabbitmq -p 5672:5672 -d rabbitmq

2. install dependencies

npm install

3. Send a msg from publisher

npm run publish <inputValue>

4. consume a msg

npm run consume
