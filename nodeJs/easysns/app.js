var http = require('http')
var parseUrl = require('url').parse
var controllers = require('./controllers/')

//function homeController(req, res) {
	//res.end('home')
//}

//function userController(req, res) {
	//res.end('user')
//}

//function staticController(req, res) {
	//res.end('static')
//}

function notFoundController(req, res) {
	res.end('Not found')
}

function find(ary, match) {
	for (var i=0; i<ary.length; i++) {
		if (match(ary[i])) return ary[i]
	}
}

const rules = [
	{path: '/', controller: controllers.home},
	{path: '/user', controller: controllers.user},
	{path: /^\/static(\/.*)/, controller: controllers.static}
]

var server = http.createServer(function(req, res) {
	var urlInfo = parseUrl(req.url)
	console.log(req.url, urlInfo)
	var rule = find(rules, function(rule) {
		if (rule.path instanceof RegExp) {
			var matchResult =  urlInfo.pathname.match(rule.path)
			if (matchResult) {
				req.params = matchResult
			}
			return matchResult
		}
		return rule.path == urlInfo.pathname
	})
	var controller = rule && rule.controller || notFoundController
	controller(req, res)
});

server.listen(8080)
