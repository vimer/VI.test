var a = require('./a')
console.log(a)
console.log(a.foo)
a.show()
console.log(module.exports == exports) //exports 只是 module.exports的一个快捷方式，当export被改变的时候 ，module.exports不会被改变
