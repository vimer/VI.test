///////ES5
//constructor
function Foo(name) {
	Bar.call(this, name)
	this.name = name
}

//extend
for (var name in Bar.prototype) {
	Foo.prototype[name] = Bar.prototype[name]
}

//override
Foo.prototype.doStuff = function() {
	return Bar.prototype.doStuff.call(this) + 1
}

//static member
Foo.addOne = function(x) {
	return x + 1
}

