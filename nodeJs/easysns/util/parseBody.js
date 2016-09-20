var getRawBody = require('./getRawBody')
const qs = require("querystring")

module.exports = function(req, cb) {
	getRawBody(req, function(err, rawBody) {
		if (err) {
			return cb(err)
		}
		var type = req.headers['content-type'] || ''
		type = type.split(';')[0]
		if (type == 'application/x-www-form-urlencoded') {
			var body = qs.parse(rawBody)
			cb(null, body)
			return
		}
		cb()
	})
}
