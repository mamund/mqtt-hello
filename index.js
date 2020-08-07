/* testing mqtt */

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquito.org');

client.on('connect', function() {
  client.subscribe('presence', function(err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt'); 
    }
  });
});

client.on('message', function(topic, message) {
  console.log(message.toString());
  client.end();
});

console.log('ready to rumble');

