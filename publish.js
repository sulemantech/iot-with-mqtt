let mqtt    = require('mqtt');
let options = [{ host: 'localhost', port: 1883 }];
let client = mqtt.connect('mqtt://localhost')

client.publish('presence', 'hello!')
client.end()