//es5
var obj = {
	x:1,
	foo: function() {
		const self = this
		const fn = function() {
			console.log(self.x) //1
		}
		fn()
	}
}
obj.foo()


//es6
var obj = {
	x: 1,
	foo: function() {
		const fn = () => { //这边不要理解为一个函数体，而是一个block
			console.log(this.x) //1,在es6中会自动绑定
		}
		fn()
	}
}
obj.foo()
