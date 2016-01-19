package main

import "fmt"

func main() {
	//var numbers map[string]int

	numbers := make(map[string]int)

	numbers["one"] = 1
	numbers["ten"] = 10
	numbers["hello"] = 3

	delete(numbers, "one")

	fmt.Println(numbers)
}
