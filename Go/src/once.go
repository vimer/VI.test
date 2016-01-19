package main

import (
	"fmt"
	"sync"
)

var a string
var once sync.Once

func setup() {
	a = "hello, world"
}
func doprint() {
	//once.Do(setup)
	print(a)
}
func main() {
	go doprint()
	go doprint()

	var input string
	fmt.Scanln(&input)
}
