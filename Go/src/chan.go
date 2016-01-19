package main

import "fmt"

func main() {
	//var shopLink = make([]string, 0, 1)
	//shopLink = append(shopLink, "hello", "world")
	//fmt.Print(shopLink)

	var shopLink = make([]int, 0)
	for i := 0; i < 1000; i++ {
		shopLink = append(shopLink, i)
	}
	fmt.Print(shopLink)
}
