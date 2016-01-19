var phoneWidth = parseInt(window.screen.width);
var phoneHeight = parseInt(window.screen.height);
var phoneScale_1 = phoneWidth / 640;
var phoneScale_2 = phoneHeight / 1000;
var phoneScale = phoneScale_1 > phoneScale_2 ? phoneScale_2 : phoneScale_1;
var ua = navigator.userAgent;
//console.log(window.innerWidth, phoneWidth, phoneHeight, phoneScale, phoneScale_1, phoneScale_2)

if (/Android (\d+\.\d+)/.test(ua)) {
	var version = parseFloat(RegExp.$1);
	if (version > 2.3) {
		document.write('<meta name="viewport" content="width=640,initial-scale=' + phoneScale + ',minimum-scale=' + phoneScale + ',maximum-scale=' + phoneScale + ',target-densitydpi=device-dpi"/>');
	} else {
		document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
	}
} else {
	document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
