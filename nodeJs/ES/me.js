var co = require('co');
var Service = {
	A: function* () {
		console.log('A')
	},
	B: function* () {
		var me = this;
		yield me.A()
		console.log('B')
	}
}

co(function* () {
	yield Service.B()
})
