class Foo extends Bar {
	constructor(name) {
		super(name)
		this.name = name
	}	
}

//override
doStuff() {
	return super.doStuff() + 1
}

// static
static addOne(x) {
	return x + 1
}
