var root = (typeof window != 'undefined') ? window : global

function Foo(name) {
	if (!(this instanceof Foo)) {
		return new Foo(name)
	}
	this.name = name
}

function show() {
	console.log(this === root, this.name)
}

Foo.prototype.show = show;

var foo = new Foo('foo')
var foo2 = Foo('foo2')
foo.show()
foo2.show()

var show2 = foo.show
show()
show2()

console.log(
	show === show2,
	foo.show === Foo.prototype.show,
	foo.constructor === Foo,
	foo.show === foo.constructor.prototype.show //当调用foo.show的时候本质上是从foo.constructor.prototype.show 原型链
)
