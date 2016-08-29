function foo() {throw new Error('Foo error')}
function bar() {
	setImediate(function() { //把调用放到队列上去
		throw new Error('bar error');
	})
}
//try catch没有办法捕捉异步的异常
function test(fn) {
	try {
		console.log('begin', fn.name)
		fn()
		console.log('end')
		return
	} catch(e) {
		console.log('caught', e.message) 
		return
	} finally {
		console.log('finally\n################')
	}
}
test(foo)
test(bar)
