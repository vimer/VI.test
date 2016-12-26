var CronJob = require('cron').CronJob;
var moment = require('moment');
var TASK = '*/1 * * * * *';
var t = TASK;

var d = moment();//now.add(2, "minute");
//var now = moment();
//console.log(now.calendar())
var job = new CronJob(t, function(){
  var diff = d.diff(moment(), 'minute');
  if (diff > 0) {
	  console.log(diff+'分钟')
	  return ;
  }
  console.log(diff)
  d = moment().add(20, 'minute');
}, null, true, 'Asia/Chongqing');
