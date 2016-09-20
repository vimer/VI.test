const send = require('../util/send')
const parseBody = require('../util/parseBody')
const qs = require('querystring')

exports.login = function(req, res) {
	parseBody(req, function(err, body) {
		if (err) {
			send.sendError()
		}
		send.redirect('/', res)	
	})
}

exports.register = function(req, res) {
	parseBody(req, function(err, body) {
		var user = {
			email: body.email,
			password: body.password,
			nickname: body.nickname
		}
		send.redirect('/', res)
	})
}
