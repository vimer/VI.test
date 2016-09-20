const joinPath = require('path').join
const mime = require('mime')
const fs = require('fs')
const publicPath = joinPath(__dirname, '../public')
const sendFile = require('../util/send').sendFile

module.exports = function(req, res) {
	console.log('params:', req.params)
	var path = req.params[1]
	path = joinPath(publicPath, path)
	console.log(path)
	sendFile(path, res)
}
