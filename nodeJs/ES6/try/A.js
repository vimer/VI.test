var log = require('bt-co-common').log;
var Service = {
	b : function(cc, ...hello) {
		try {
			var sql = 'select 1';
			for (var a of hello) {
				consol.log(a);
				sql =  sql + ',' + a;
			}
			console.log(sql)
		} catch(e) {
			log.error(e);
			throw new Error('hello');
		}
	}
}

module.exports = Service;
