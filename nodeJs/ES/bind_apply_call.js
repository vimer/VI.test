function foo(a, b, c) {
	console.log(this, 'a', a, 'b', b, 'c', c)
}

foo.apply({x:1}, [1,2,3]) //数组方式传入
foo.call({x:1}, 1, 2, 3) //直接传入
foo.bind({x:1}, 1)(2, 3)
