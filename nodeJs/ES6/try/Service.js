var log = require('bt-co-common').log;

var Dao = require('./Dao.js');

exports.test = function() {
	try {
		Dao.test();
	} catch(e) {
		console.log(e)
		throw('Service操作失败')
	}
}
