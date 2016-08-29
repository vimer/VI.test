//闭包成立的条件是 函数内定义函数，大部分时候会把函数返回出来，偶尔会直接消费
//闭包是引用了变量的函数，这个被应用的变量将和这个函数一同存在，即使离开了创造它的环境也不例外
//参数和函数是可以绑定的，即使函数脱离他创建的函数之后依然有效

//闭包是包含自由变量的函数，比如下面，但这样写不能体现闭包的特点
var x = 1;
function () {
	//do something with x...
}

////////
function foo(x) {
	//形成闭包BEGIN
	function bar(y) { //返回的是函数
		return function() { 
			console.log('x:'+x, 'y:'+y)
		}
	}
	//形成闭包END
	return [bar(1), bar(2)];
}

var [f1, f2] = foo(10)
setTimeout(function() {
	f1()
	f2()
}, 100)


//////////////
//返回的函数不能立即执行，而是调用了f()才执行，函数到执行时才计算
function count() {
	var arr = [];
	for (var i=1; i<=3; i++) {
		//形成闭包BEGIN
		arr.push(function () { //无闭包
			return i * i;
	   	});
		//形成闭包END
	}
	return arr; 
} 
var results = count();
var f1 = results[0]; //函数引用了变量i，但它并非立即就执行的，等3个函数都返回时，它们所引用的变量i已经变成了4
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3())

//
function count_ver2() {
	var arr = [];
	for (var i=1; i<=3; i++) {
		//形成闭包BEGIN
		arr.push((function (n) { 
			return function() { //形成闭包
				return n * n;
			}
	   	})(i));
		//形成闭包END
	}
	return arr; 
} 
var results = count_ver2();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3())
