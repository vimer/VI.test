//闭包成立的条件是 函数作为返回值
//参数和函数是可以绑定的，即使函数脱离他创建的函数之后依然有效
function foo(x) {
	function bar(y) { //返回的是函数
		return function() { //形成闭包
			console.log('x:'+x, 'y:'+y)
		}
	}
	return [bar(1), bar(2)];
}

var [f1, f2] = foo(10)
setTimeout(function() {
	f1()
	f2()
}, 100)


//////////////
function count() {
	var arr = [];
	for (var i=1; i<=3; i++) {
		arr.push(function () { //无闭包
			return i * i;
	   	});
	}
	return arr; 
} 
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3())

//
function count_ver2() {
	var arr = [];
	for (var i=1; i<=3; i++) {
		arr.push((function (n) { 
			return function() { //形成闭包
				return n * n;
			}
	   	})(i));
	}
	return arr; 
} 
var results = count_ver2();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3())
