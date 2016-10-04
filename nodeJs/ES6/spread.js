function f3(x, y, z, k) {
	return x + y + z*k
}

var ary = [1,2,3,4]

//把数组每个元素应用到函数中
console.log(f3.apply(null, ary))  //es5
console.log(f3(...ary)) //es6
