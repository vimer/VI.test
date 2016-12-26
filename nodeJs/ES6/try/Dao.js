var log = require('bt-co-common').log;

exports.test = function() {
	try {
		console.log('Dao begin')
		throw new Error('Dao里面异常');
		console.log('Dao end')
	} catch(e) {
		log.error('Dao失败', e);
		throw('...')
		//throw(e);
	}
}

