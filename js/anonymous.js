 /*
  * //块级作用域的出现，匿名函数不再必要,匿名函数的作用是：相当于划出一块私有作用域，避免数据污染，执行完就销毁，避免内存长驻, 只能在ES5以下才能使用，第一个括号创建了一个匿名函数，第二个括号用于传参数,以下几个都是匿名函数的例子
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
