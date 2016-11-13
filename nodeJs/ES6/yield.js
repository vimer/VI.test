/*
 *function* gen() { //定义一个生成器函数
 *    yield 'foo'; //离开生成器的位置，把foo返回到生成外部
 *}
 *var g = gen(); //使用生成器，得到一个生成器
 *console.log(g.next());
 *console.log(g.next()); //返回yeild的位置继续向下执行
 *console.log(g.next());
 */

//生成器是可以迭代的
/*
 *function* range(s, e) {
 *    for (var i=s; i<e; i++) {
 *        yield i;
 *    }
 *}
 *
 *for (let v of range(1, 4)) {
 *    console.log(v)
 *}
 */

//可以向生成器传递值
/*
 *function* gen() {
 *    var s = yield ['foo', 'bar'];
 *    console.log(s) //foo-bar
 *}
 *
 *var g = gen();
 *var state = g.next();
 * //state: {value:['foo', 'bar'], done:false}
 *g.next(state.value.join('-')); //{done: true}
 */

//可以提前结束
/*
 *function* gen() {
 *    yield 1;
 *    yield 2;
 *    yield 3;
 *}
 *
 *var g = gen();
 *console.log(g.next());
 *console.log(g.return('foo'));
 *console.log(g.next());
 *console.log(g.next());
 */

//可以抛出异常，生成器是在外部控制的
/*
 *function* gen() {
 *    yield 1;
 *}
 *var g = gen()
 *g.next()
 *g.throw(new Error('My Error'));
 */

//yield Promise
/*
 *function* gen() {
 *    var a = yield Promise.resolve(1);
 *    console.log(a)
 *}
 *
 *var g = gen();
 *var v = g.next()
 *if (v.value && v.value.then) {
 *    v.value.then(v => g.next(v), e => g.throw(e))
 *}
 */

//yield Promise Array
/*
 *function* gen() {
 *    var a = yield [Promise.resolve(1), Promise.resolve(2)];
 *    console.log(a)
 *}
 *
 *var g = gen()
 *var v = g.next()
 *if (v.value && v.value.then) {
 *    v.value.then(v=>g.next(v), e=>g.throw(e))
 *}
 *if (Array.isArray(v.value)) {
 *    Promise.all(v.value).then(v=>g.next(v), e=>g.throw(e))
 *}
 */

//co module 来实现流程控制
/*
 *var co = require('co')
 */

//var co = require('co');
//function* foo(x) {
	//console.log("foo->");
	//setTimeout(function* () {
		//return yield Promise.resolve(x+1)
	//}, 5000)
//}
//co(function*() {
	//console.log(2)
	//var value = yield foo(10);
	//console.log(value)
	//console.log(3)
	//var value2 = yield foo(20);
	//console.log(value2)
	//console.log(4)
//})

//var co = require('co');

//co(function* (){
    //var now = Date.now();
      //yield sleep200ms;
      //console.log(Date.now() - now);
//})();

//function sleep200ms(cb) {
    //setTimeout(cb, 200);
//}

//co(function *( input ) {
	//var a;
	//setTimeout(function(){
		//console.log(a); // 'abc'
	//}, 300)
	//a = yield delayTask(400);
	//console.log(a);
	//b = yield delayTask(100);
	//console.log(b);
	//yield input;
//})

//function delayTask(ms){
	//return function(cb){
		//setTimeout(function(){
			//cb(null, ms)
		//}, ms);
	//}
//}




