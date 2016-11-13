//async function foo(x) {
	//try {
		////await 可以等待Promise完成
		//let v = await Promise.resolve(x);
		////异步的return的值
		//return v+1;
	//} catch (err) {
		//console.error('Error', err.stack)
		//return -1;
	//}
//}

//foo(1).then(v => console.log('foo(1)', v));


//读文件
var co = require('co');
var fs = require("fs");
var mzfs = require('mz/fs');
var co_fs = require('co-fs');
const promisefy = (nodefn) => (...args) =>
	new Promise((resolve, reject) => {
	nodefn(...args, function(err, res) {
		if (err) {
			return reject(err)
		}
		resolve(res)
	})
})
var readFile = promisefy(fs.readFile);
/*
 *co(function* gen() {
 *    var v = yield co_fs.readFile('./async.js', 'utf8');
 *    console.log(v)
 *});
 */

async function foo() {
	const v = await readFile('./async.js', 'utf8');
	//return v;
}
//foo().then(v => console.log(v))

