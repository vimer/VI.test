foo() //这里函数定义会被提前
function foo() {
	console.log('foo')
}
foo = undefined
//foo()


//函数是一个表达式，返回了一个函数作为的值
//函数表达式不是函数定义，这里不会生成fb的变量
//可以将函数赋值给变量，不能提前调用
//fa()
var fa = function () {
	console.log('fa')
}


//函数参数
function testArgs(a, b) {
	console.log(a, b)
}
testArgs(1)
testArgs(1, 2, 3)


//arguemnts
function testArguments(a, b) {
	console.log(Array.isArray(arguments))
	console.log(a, b, arguments[0], arguments[1])
	var args = Array.prototype.slice.call(arguments);
	console.log(Array.isArray(args), args)
}
testArguments(1, 2, 3)
