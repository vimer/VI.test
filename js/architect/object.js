/*
 *var CheckObject = {
 *    checkName: function() {
 *
 *    },
 *    checkEmail: function() {
 *
 *    },
 *    checkPassword: function() {
 *
 *    }
 *}
 *CheckObject.checkEmail();
 */

/*
 *var CheckObject = function() {};
 *CheckObject.checkName = function() {
 *
 *}
 *CheckObject.checkEmail = function() {
 *
 *}
 *CheckObject.checkPassword = function() {
 *
 *}
 */


/*
 *var CheckObject = function() {
 *    return {
 *        checkName : function() {
 *        },
 *        checkEmail : function() {
 *            console.log("1");
 *        }
 *    }
 *}
 *
 *var a = CheckObject(); //可复用
 *a.checkEmail();
 *
 *var b = CheckObject(); //可复用
 *b.checkEmail();
 */

/*
 *var CheckObject = function() {
 *    this.checkName = function() {
 *
 *    }
 *    this.checkEmail = function() {
 *        console.log(1)
 *    }
 *    this.checkPassword = function() {
 *
 *    }
 *}
 *var a = new CheckObject();
 *a.checkEmail();
 */

/*
 *var CheckObject = function() {};
 *CheckObject.prototype = {
 *    checkName: function() {
 *        return this;
 *    }, 
 *    checkEmail: function() {
 *        return this;
 *    },
 *    checkPassword: function() {
 *        return this;
 *    }
 *}
 *var a = new CheckObject();
 *a.checkName().checkEmail().checkPassword();
 */

/*会产生污染
 *Function.prototype.checkEmail = function() {
 *
 *}
 *var f = function() { };
 *f.checkEmail();
 */


/*
 *Function.prototype.addMethod = function(name, fn) {
 *    this[name] = fn;
 *    return this;
 *}
 *var methods = function() {};
 *methods.addMethod('checkName', function(){
 *
 *    return this;
 *}).addMethod('checkEmail', function() {
 *    return this;
 *});
 *methods.checkName().checkEmail();
 */

/*
 *Function.prototype.addMethod = function(name, fn) {
 *    this.prototype[name] = fn;
 *    return this;
 *}
 *var Methods = function() {};
 *Methods.addMethod('checkName', function(){
 *
 *    return this;
 *}).addMethod('checkEmail', function() {
 *    return this;
 *});
 *var m = new Methods();
 *m.checkEmail();
 */







