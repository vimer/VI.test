//es5
function f1(x, y) {
	if (y === undefined) {
		y = 12
	}
	return x+y
}
f1(5)

//es6
function f1(x, y=12) {
	return x+y
}
f1(5)

const f1 = (x, y=12) => x+y
f1(5)
