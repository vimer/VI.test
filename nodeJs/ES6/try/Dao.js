var log = require('bt-co-common').log;

exports.test = function() {
	try {
		console.log('Dao begin')
		throw('Dao里面异常');
		console.log('Dao end')
	} catch(e) {
		throw(e)
	}
}

