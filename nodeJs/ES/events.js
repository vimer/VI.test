const util = require('util')
const EventEmitter = require('events')

function MyEmitter() {
	EventEmitter.call(this)
}
util.inherits(MyEmitter, EventEmitter)

MyEmitter.prototype.doStaff = function(a, b) {
	this.emit('staff', a, b)
}

const myEmitter = new MyEmitter()
myEmitter.on('staff', function(a, b) {
	console.log('on staff', a, b)
})
myEmitter.once('staff', function(a, b) {
	console.log('once', a, b)
})

myEmitter.doStaff(1, 2)
myEmitter.doStaff(1, 4)
