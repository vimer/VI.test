//var bcrypt = require('bcrypt');
var crypto = require('crypto');
var sha256 = crypto.createHash('sha256');

var saltedPwd = function(pwd) {
	var salt = '$2a$10$7.zN6qstKocdGwP9c0d09e'//bcrypt.genSaltSync(10)
	//var salt = bcrypt.genSaltSync(10)
	console.log(salt)
	var salted = pwd+"{"+salt+"}";
	var dig = sha256.update(salted).digest('binary');
	console.log(dig)
	var iter = 2;
	for (var i=1; i<iter; i++) {
		if (i+1 == iter) {
			dig = crypto.createHash('sha256').update(dig+salted).digest('byte');
		} else {
			dig = crypto.createHash('sha256').update(dig+salted).digest('binary');
		}
		console.log(dig)
	}
	var pwd = dig.toString('base64');
	return pwd;
}
var pwd = saltedPwd('12345')
console.log(pwd)
//console.log('salt->', salt);
//console.log("pwd->", pwd)

//和php同样测试
//var salted = 'haha';
//var digest = crypto.createHash('sha256').update(salted).digest('hex');
//for (var i=1; i<10; i++) {
	//digest = crypto.createHash('sha256').update(digest+salted).digest('hex');
//}
//console.log(digest)
