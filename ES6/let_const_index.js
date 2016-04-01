 'use strict'
 //ES5
/*
 * {
 *     var a = 1;
 *     let b = 1;
 * }
 *console.log(a)
 *console.log(b)
 */

/*
 *for (let i=0; i<5; i++) {
 *    console.log(i)
 *}
 *console.log(i)
 */

//每一次循环，i作为全局变量，都会替代旧的i，所以输出的为10
/*
 *var a = [];
 *for (var i = 0; i < 10; i++) {
 *    a[i] = function () {
 *        console.log(i);
 *    };
 *}
 *a[2](); 
 */

//使用let时，每次都是新的变量
/*
 *var a = [];
 *for (let i = 0; i < 10; i++) {
 *    a[i] = function () {
 *        console.log(i);
 *    };
 *}
 *a[2](); 
 */

/*
 *console.log(foo)
 *var foo = "foo"; //会发生变量提升
 *let foo = "foo";  //直接报错
 */

/*
 *var tmp = 123;
 *if (true) {
 *    tmp = 'abc'; // ReferenceError
 *    let tmp; //只要块级作用域中存在let命令，它所声明的变量就绑定这个区域
 *}
 */

/*
 *typeof x;
 *let x;
 */

/*
 *function bar(x = y, y = 2) {
 *  return [x, y];
 *}
 *bar(); // 报错
 */

/* //例子有点问题
 *function bar(x = 2, y = x) {
 *  return [x, y];
 *}
 *bar(); // [2, 2]
 */

/*
 *var fun = function () {
 *  let a = 10;
 *  var a = 1;
 *}
 */

 /*
  *var fun = function () {
  *    let a = 10;
  *    let a = 1;
  *}
  */

 /* //不允许在函数内部重新声明函数
  *function func(arg) {
  *    let arg; // 报错
  *}
  */

 /* 两个作用域
  *function func(arg) {
  *    {
  *        let arg; // 不报错
  *    }
  *}
  */

 /*
  * //变量提升导致内存的tmp变量覆盖了外层的tmp变量
  *var tmp = new Date();
  *function f() {
  *    console.log(tmp);
  *    if (false){
  *        var tmp = "hello world";
  *    }
  *}
  *f() 
  */

 /*
  *var s = 'hello';
  * // 用来计数的循环变量泄露为全局变量
  *for (var i = 0; i < s.length; i++){
  *    console.log(s[i]);
  *}
  *console.log(i); // 5
  */

 /* //块级作用域，外面的代码不受内层影响
  *function f1() {
  *    let n = 5;
  *    if (true) {
  *        let n = 10;
  *    }
  *    console.log(n); // 5
  *}
  *f1();
  */

 /* //内层作用域可以定义外层作用域的同名变量
  *{
  *    {
  *        let insame = "helloworld";
  *        {
  *            let insame = "hello world";
  *        }
  *    }
  *}
  */

  //块级作用域的出现，匿名函数不再必要,匿名函数的作用是：相当于划出一块私有作用域，避免数据污染，执行完就销毁，避免内存长驻, 只能在ES5以下才能使用，第一个括号创建了一个匿名函数，第二个括号用于传参数,以下几个都是匿名函数的例子
 /*
  *(function () {
  *    var tmp = "hello"
  *    console.log(tmp)
  *})();
  */

  /*
   *var result = function (x) { return x + 1; }(3); // => result 的值为4)})
   * //function result(x) { return x + 1; }(3); // 这样是不行的
   *console.log(result)
   * //为什么不直接写成var result = 3 + 1, 因为有些使用我们希望递归调用，或者希望创造一个闭包就需要使用函数自调用的技巧
   */

/*
 *var plusOne = function () {
 *  var realFunction = function (x) {
 *      return x + 1;
 *    };
 *  return realFunction; // 这里不能加括号，因为我们要返回`realFunction`函数本身
 *};
 *var result = plusOne()(3);
 *console.log(result);
 */

/*
 *var plusOne = function () {
 *  return  realFunction = function (x) {
 *      return x + 1;
 *    };
 *};
 *var result = plusOne()(3);
 *console.log(result);
 */

/*
 *function plus (a) {
 *  return function (b) {
 *      return a + b;
 *    };
 *}
 *var res = plus(3)(4);
 *console.log(res)
 */

/* //把一个动作分成两步完成可以实现一定的私密性
 * function plus (a) {
 *   return function (b) {
 *       return a + b;
 *     };
 * }
 *
 * var a = plus(3);
 * var b = a(4);
 * console.log(b);
 */

/*
 *function unlock (pw1) {
 *    return function (pw2) {
 *        if (pw1 + pw2 === 'niubi') return true;
 *        else return false;
 *    };
 *};
 *var myLock;
 *(function () { //匿名函数隔离作用域
 *  var password1 = 'niu';
 *  myLock = unlock(password1);
 *})();
 *(function () {
 *  var password2 = 'bi';
 *  myLock = myLock(password2);
 *})()
 *console.log(myLock);
 */

//非闭包,可以从外部读取
/*
 *var a = 2;
 *{
 *    var a = 3;
 *}
 *console.log(a)
 */

/* 不可以从外部读取
 *var a = 2;
 *(function () {
 *    var a = 3;
 *}())
 *console.log(a)
 */

/* 闭包，current一直跟着函数走，这个变量会长期占用内存
 *function incrementClosure () {
 *  var current = 0;
 *  return function () {
 *      current = current + 1;
 *      return current;
 *    };
 *}
 *var inc = incrementClosure();
 *console.log(inc()) //1
 *console.log(inc()) //2
 */


/*
 * //在ES5中会得到函数提升，不管会不会进入if代码块，函数声明都会提升到当前作用域的顶部
 *function f() { console.log('I am outside!'); }
 *(function () {
 *  if (true) {
 *      function f() { console.log('I am inside!'); }
 *  }
 *  f();
 *}());
 */

// ES5中报错,在ES6中大括号不能省略
/*
 *'use strict';
 *if (true) {
 *     function f() {} // 报错
 *}
 */

 /*
  *const a = [];
  *a.push("Hello"); // 可执行
  *a.length = 0;    // 可执行
  * //a = ["Dave"];    // 报错
  */

 /*
  *window.a = 1;
  *a // 1
  *a = 2;
  *window.a // 2
  */

/*
 *var a = 1;
 * //如果在Node的REPL环境，可以写成global.a
 * // 或者采用通用方法，写成this.a
 *window.a // 1
 *let b = 1;
 *window.b // undefined
 */


