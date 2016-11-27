var bcrypt = require('bcrypt');
var crypto = require('crypto');
var sha256 = crypto.createHash('sha256');
var salt = bcrypt.genSaltSync(10)
var salted = "12345{"+salt+"}";
digest = sha256.update(salted).digest('binary');
var iter = 5000;
for (var i=1; i<iter; i++) {
	if (i+1 == iter) {
		digest = crypto.createHash('sha256').update(digest+salted).digest('byte');
	} else {
		digest = crypto.createHash('sha256').update(digest+salted).digest('binary');
	}
}
var pwd = digest.toString('base64');
console.log('salt->', salt);
console.log("pwd->", pwd)

//和php同样测试
//var salted = 'haha';
//var digest = crypto.createHash('sha256').update(salted).digest('hex');
//for (var i=1; i<10; i++) {
	//digest = crypto.createHash('sha256').update(digest+salted).digest('hex');
//}
//console.log(digest)
