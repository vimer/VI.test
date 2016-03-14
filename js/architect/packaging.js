/*
 *var Book = function(id, bookname, price) {
 *    this.id = id;
 *    this.bookname = bookname;
 *    this.price = price;
 *}
 *
 *Book.prototype.display = function() {
 *    console.log(this.bookname)
 *}
 *
 *var book = new Book(10, "设计模式", 50);
 *console.log(book.bookname);
 *book.display()
 */

var Book = function(id, name, price) {
	var num = 1;

	function checkId () {

	};

	this.getName = function(){ return name;}
	this.getPrice = function(){}
	this.setName = function(){ }
	this.setPrice = function(){}

	this.id = id;

	this.copy = function() {
	}

	this.setName(name);
	this.setPrice(price);
};
Book.isChinese = true; //静态s 
Book.prototype = {
	isJSBook : false,
	display : function() {}
}

var b = new Book(11, "设计模式", 50);
console.log(b.num);
console.log(b.id);
console.log(b.getName());
console.log(b.isChinese)
console.log(Book.isChinese)
console.log(b.isJSBook)

