const EventEmmiter = require('events');
const { extname } = require('path');

// Create class
class MyEmitter extends EventEmmiter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');