var log = require('bt-co-common').log;

var Service = require('./Service.js');

try {
	console.log('route begin');
	Service.test();
	console.log('route end');
} catch(e) {
	log.error(e);
	console.log(e)
	console.log('500错误')
}
