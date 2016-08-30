var http = require('http')
var parseUrl = require('url').parse

function homeController(req, res) {
	res.end('home')
}

function userController(req, res) {
	res.end('user')
}

function notFoundController(req, res) {
	res.end('Not found')
}

function find(ary, match) {
	for (var i=0; i<ary.length; i++) {
		if (match(ary[i])) return ary[i]
	}
}

const rules = [
	{path: '/', controller: homeController},
	{path: '/user', controller: userController}
]

var server = http.createServer(function(req, res) {
	var urlInfo = parseUrl(req.url)
	console.log(req.url, urlInfo)
	var rule = find(rules, function(rule) {
		return rule.path == urlInfo.pathname
	})
	var controller = rule && rule.controller || notFoundController
	controller(req, res)
})

server.listen(8080)
