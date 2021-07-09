const client = require('discord-rich-presence')('ID DE VOTRE BOT');
 
client.updatePresence({
  state: 'slithering',
  details: '🐍',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'slt',
  smallImageKey: 'cv',
  instance: true,
});