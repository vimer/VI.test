const joinPath = require('path').join
const mime = require('mime')
const fs = require('fs')
const publicPath = joinPath(__dirname, '../public')

exports.sendFile = function(path, res) {
	fs.readFile(path, function(err, data) {
		if (err) { //构建基本返回思路
			if (err.code == 'ENOENT') {
				res.writeHead(404)
				res.end('Not Found')
				return
			}
			res.writeHead(500)
			res.end(err.message)
		} else {
			var mimeType = mime.lookup(path)
			var charset = mime.charsets.lookup(mimeType)
			res.setHeader('Content-Type', mimeType+(charset ? '; charset='+charset:''))
			console.log('mimeType:', mimeType, 'charset:', charset)
			res.end(data)
		}
	})
	//res.end('static')
}

exports.redirect = function(location, res, statusCode) {
	statusCode = statusCode || 302	
	res.writeHead(statusCode, {
		location: location
	})	
	res.end()
}

exports.sendError = function(err, res, statusCode) {
	statusCode = statusCode || 500
	res.writeHead(statusCode)
	res.end(err.message)
}
