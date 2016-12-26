var a = [1,2,3,4];
var courses = [
	{name:'会计', value:'会计', isDisabled:false, isChecked:true, id:161},
	{name:'审计', value:'审计', isDisabled:false, isChecked:true, id:162},
	{name:'税法', value:'税法', isDisabled:false, isChecked:true, id:163},
	{name:'财管', value:'财管', isDisabled:false, isChecked:false, id:165},
	{name:'战略', value:'战略', isDisabled:false, isChecked:false, id:166},
	{name:'经济法', value:'经济法', isDisabled:false, isChecked:false, id:164}
];
var b = courses.slice();
for (var i=0; i<b.length; i++) {
	if (b[i].isChecked) {
		//console.log(courses[i])
		courses.splice(i, 1)
	}
}
console.log(courses);
