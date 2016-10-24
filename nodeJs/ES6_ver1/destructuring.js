'use strict'

/*
 *var [a, b, c] = [1,2,3];
 */

//console.log(a, b, c)

/*
 *let [foo, [[bar], baz]] = [1, [[2], 3]];
 */
//console.log(foo, bar, baz);


/*
 *let [head, ...tail] = [1, 2, 3, 4];
 */
//console.log(head, tail);

/*
 *let [x, y, z] = new Set(["a", "b", "c"])
 */
//console.log(x);

 //fibs是一个Generator函数，原生具有Iterator接口
/*
 *function* fibs() {
 *  var a = 0;
 *  var b = 1;
 *  while (true) {
 *      yield a;
 *      [a, b] = [b, a + b];
 *      console.log(a);
 *  }
 *}
 *var [first, second, third, fourth, fifth, sixth] = fibs();
 *console.log(sixth)
 */

//ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
/*
 *var [foo = true] = [];
 *foo // true
 *
 *[x, y = 'b'] = ['a'] // x='a', y='b'
 *[x, y = 'b'] = ['a', undefined] // x='a', y='b'
 */

/*
 *var [x = 1] = [undefined];
 *console.log(x) // 1
 *
 *var [x = 1] = [null];
 *console.log(x) // null 不是严格的等于undefined
 */

//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
/*
 *function f(){
 *  console.log('aaa');
 *}
 *
 * //let [x = f()] = [1];
 *let [x = f()] = [undefined];
 *
 *console.log(x)
 */

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
/*
 *let [x = 1, y = x] = [];     // x=1; y=1
 *let [x = 1, y = x] = [2];    // x=2; y=2
 *let [x = 1, y = x] = [1, 2]; // x=1; y=2
 *let [x = y, y = 1] = [];     // ReferenceError
 *let [x = 1, y = x] = [];     
 */

/*
 *var { bar, foo } = { foo: "aaa", bar: "bbb" };
 *console.log(foo) // "aaa"
 *console.log(bar) // "bbb"
 *
 *var { baz } = { foo: "aaa", bar: "bbb" };
 *console.log(baz) // undefined
 */

 //如果变量名和属性名不一样，必须写成这样
 //真正赋值的是后者
/*
 *var { foo: baz } = { foo: "aaa", bar: "bbb" };
 *console.log(foo);
 *console.log(baz);
 */

/* //采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明
 *let baz;
 *let {bar: baz} = {bar: 1}; // SyntaxError: Duplicate declaration "baz"
 *console.log(baz)
 */

/*
 *let foo;
 *({foo} = {foo: 1}); // 成功
 *
 *let baz;
 *({bar: baz} = {bar: 1}); // 成功
 *console.log(foo, baz);
 */

/*
 *var obj = {
 *    p: [
 *        "Hello",
 *        { 
 *            y: "World"
 *        }
 *    ]
 *};
 *
 *var { p: [x, { y }] } = obj;
 *console.log(x) // "Hello"
 *console.log(y) // "World"
 */

/*
 *let obj = {};
 *let arr = [];
 *
 *({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
 *
 *console.log(obj) // {prop:123}
 *console.log(arr) // [true]
 */

/*
 *var {x = 3} = {};
 *console.log(x) // 3
 *
 *var {x, y = 5} = {x: 1};
 *console.log(x) // 1
 *console.log(y) // 5
 *
 *var { message: msg = "Something went wrong" } = {message:"hello"};
 *console.log(msg) // "Something went wrong"
 */


/*
 *var {x = 3} = {x: undefined};
 *console.log(x) // 3
 *
 *var {x = 3} = {x: null};
 *console.log(x) // null
 */

/* //解构字符串
 *const [a, b, c, d, e] = 'hello';
 *console.log(a, b, c, d, e)
 */


//let {length : len} = {length: 'hello'};
/*
 *let {length : len} = 'hello';
 *console.log(len) // 5
 */


/*
 *let {toString: s} = 123;
 *console.log(s === Number.prototype.toString) // true
 */

/*
 *let {toString: s} = true;
 *console.log(s === Boolean.prototype.toString) // true
 */


/*
 * //解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
 *let { prop: x } = undefined; // TypeError
 *let { prop: y } = null; // TypeError
 */

/* //函数参数的解构赋值
 *function add([x, y]) {
 *  return x + y;
 *}
 *console.log(add([1, 2]));
 */

//[[1, 2], [3, 4]].map(([a, b]) => a + b)

/*
 *function move({x = 0, y = 0} = {}) {
 *  return [x, y];
 *}
 *
 *move({x: 3, y: 8}); // [3, 8]
 *move({x: 3}); // [3, 0]
 *move({}); // [0, 0]
 *move(); // [0, 0])
 *
 */

 // 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
/*
 *function move({x, y} = { x: 0, y: 0 }) {
 *  return [x, y];
 *}
 *
 *move({x: 3, y: 8}); // [3, 8]
 *move({x: 3}); // [3, undefined]
 *move({}); // [undefined, undefined]
 *move(); // [0, 0]
 */

//function example() {
  //return [1, 2, 3];
//}
//var [a, b, c] = example();

//返回一个对象
//function example() {
  //return {
	//foo: 1,
	//bar: 2
  //};
//}
//var { foo, bar } = example();
//console.log(a, b, c)


/*
 *var map = new Map();
 *map.set('first', 'hello');
 *map.set('second', 'world');
 *
 *for (let [key, value] of map) {
 *    console.log(key + " is " + value);
 *}
 */
