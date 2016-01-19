var moment = require("moment");
var fs = require("fs");

var weak = ["日","一","二","三","四","五","六"];

for (var year=2036; year<=2036; year++) {
	fs.mkdir(year+"年", 0755);
	var i = 0;
	var date;
	while (1) {
		date = moment({year:year}).add(i, 'd');
		if (date.year() != year) break;
		console.log(date.year(), year)
		var str = date.format('YYYY年M月D日，周')+weak[date.format("e")];
		//var content =  '<html><basefont face="微软雅黑" size="2" /><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><meta name="exporter-version" content="Evernote Windows/275193; Windows/6.1.7601 Service Pack 1;"/> <style>body{font-family:微软雅黑;font-size:12pt;}</style><body><div><span style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">## '+str+'<br><br><br><br><br></span></div></body></html>';
		var content =  '\ufeff## '+ str;
		var fd = fs.openSync(date.year()+"年/"+str+".txt", "w", 0644, "utf8");
		fs.writeSync(fd, content, "utf8");
		fs.close(fd)
		i++;
	}
}

