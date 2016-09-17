const joinPath = require('path').join
const fs = require('fs')
const publicPath = joinPath(__dirname, '../public')

module.exports = function(req, res) {
	console.log('params:', req.params)
	var path = req.params[1]
	path = joinPath(publicPath, path)
	console.log(path)

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
			res.end(data)
		}
	})
	//res.end('static')
}
