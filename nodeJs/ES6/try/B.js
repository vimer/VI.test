var log = require('bt-co-common').log;
var Service = require('./A.js');
try {
	Service.b(1, 2,3,4,5);
} catch(e) {
	console.log(e)
}
