module.exports = function(stream, cb) {
	var buffers = []
	stream.on('data', function(data) {
		buffers.push(data)		
	})
	stream.on('end', function(data) {
		cb(null, Buffer.concat(buffers).toString('utf8'))
	})
	stream.on('error', function(err) {
		cb(err)
	})
}
