var m3u8 = require('m3u8');
var fs   = require('fs');

var parser = m3u8.createStream();
var file   = fs.createReadStream('./FUFKENf8p0VtS09JSjU62JT1TmH3ezgj.m3u8?1479808675');
file.pipe(parser);

parser.on('item', res => {
	console.log(res);
}) 
parser.on('m3u', function(m3u) {
	//console.log(m3u)
});
