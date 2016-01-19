package main

import (
	"log"
)

func main() {

	//简单变量命名
	//index, j
	for i := 0; i < 10; i++ {
		for j := 0; j < i; j++ {
		}
	}

	//当循环行数多的时候，建议 取一个更有意义的名字
	//比如我要在10组人中选一个最高的人 person[10][10]
	var maxHigh = person[0][0]
	for groupIndex := 0; groupIndex < 10; groupIndex++ {

		var groupHigh = person[groupIndex][0]
		for highIndex := 0; highIndex < 10; highIndex++ {
			groupHigh = person[groupIndex][highIndex]
			if groupHigh < person[groupIndex][highIndex] {
				groupHigh = person[groupIndex][highIndex]

			}
		}

		if maxHigh < groupHigh {
			maxHigh = groupHigh
		}
	}
}
