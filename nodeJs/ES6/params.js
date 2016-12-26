var co = require('co');
var a = function* (_flow) {
	var keys = [];
	var values = [];
	for (var a in _flow) {
		keys.push(a);
		values.push(_flow[a])
	}
	return [keys.toString(), values];
}

co(function* () {
	var val = yield a({cash:'1', b:'2'})
	console.log(val)
})
