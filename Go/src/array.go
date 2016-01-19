package main

import "fmt"

func modify(array [5]int) {
	array[0] = 10
	fmt.Println(array)
}

func main() {
	array := [5]int{1, 2, 3, 4, 5}

	modify(array)

	fmt.Println(array)

	a := [3]int{1, 2, 3}
	b := [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	c := [...]int{4, 5, 6}
	fmt.Println(a, b, c)

}
