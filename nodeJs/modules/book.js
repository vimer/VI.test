function Book(name) {
	this.name = name
}

Book.prototype.show = function() {
	console.log(this.name)
}

module.exports = Book
//exports = Book //exports只是module.exports的一个快捷方式，改变exports的值并不能改变module.exports的值

console.log(module.parent)
