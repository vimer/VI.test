//可变参数
//es5
function f2(fn) {
	var y = Array.prototype.slice.call(arguments, 1)  //先转换成数组
	return y.map(fn)
}

//es6
function f2(fn, ...y) {
	return y.map(fn)
}
