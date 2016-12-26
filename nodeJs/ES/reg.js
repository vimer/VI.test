var classgroup = {
	'xxx': '2017BT经济法1班1j0组',
	'aaa': '2017BT经济法1班',
	'ddd': '2017六神四科1班',
	'x1xx': '2017六神四科1班10组'
}
var regBTCG = /^2017BT(.*?)(\d+)班(\d+)组$/;
var regBTC = /^2017BT(.*?)(\d.)班$/;
var regLSC = /^2017(六神.*?)(\d.)班$/;
var regLSCG = /^2017(六神.*?)(\d.)班(\d.)组$/;

for (var cg in classgroup) {

	var arrBTCG = classgroup[cg].match(regBTCG); 
	var arrBTC = classgroup[cg].match(regBTC); 
	var arrLSCG = classgroup[cg].match(regLSCG); 
	var arrLSC = classgroup[cg].match(regLSC); 

	if (arrBTCG) {
		var course = arrBTCG[1];
		var class_ = arrBTCG[2];
		var group = arrBTCG[3];
		console.log(course, class_, group)
	}
	if (arrBTC) {
		var course = arrBTC[1];
		var class_ = arrBTC[2];
		console.log(course, class_)
	}
	if (arrLSCG) {
		var course = arrLSCG[1];
		var class_ = arrLSCG[2];
		var group = arrLSCG[3];
		console.log(course, class_, group)
	}
	if (arrLSC) {
		var course = arrLSC[1];
		var class_ = arrLSC[2];
		console.log(course, class_)
	}
}
//console.log(res1, res2, res3, res4)
