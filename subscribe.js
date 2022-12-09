let mqtt    = require('mqtt');
let options = [{ host: 'localhost', port: 1883 }];
let client = mqtt.connect('mqtt://localhost')

client.subscribe('presence')
client.on('message', function (topic, message) {
  console.log(message)
})