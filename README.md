# mqtt-hello
simple mqtt test

### from the docs....

MQTT.js bundles a command to interact with a broker. In order to have it available on your path, you should install MQTT.js globally:

  npm install mqtt -g

Then, on one terminal

  mqtt sub -t 'hello' -h 'test.mosquitto.org' -v

On another

  mqtt pub -t 'hello' -h 'test.mosquitto.org' -m 'from MQTT.js'

See mqtt help <command> for the command help.
