//async function foo(x) {
	//try {
		//let v = await Promise.resolve(x);
		//return v+1;
	//} catch (err) {
		//console.error('Error', err.stack)
		//return -1;
	//}
//}

//foo(1).then(v => console.log('foo(1)', v));


//读文件
var fs = require("fs");
var co_fs = require('co-fs');
async function foo() {
	var v = await co_fs.readFile('./async.js', 'utf8');
	console.log(v.value())
	//await new Promise(function(resolve) {
		//fs.readFile('./async.js', 'utf8', (err, res) => {
			//return res;
			//resolve();
		//});
	//})
}
foo()

//var res = foo()
//console.log(res)
