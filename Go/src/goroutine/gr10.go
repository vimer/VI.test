package main

import (
	"fmt"
	"runtime"
)

func main() {
	runtime.GOMAXPROCS(2)
	for i := 0; i < 3; i++ {
		go fmt.Println(i)
	}
	var input string
	fmt.Scanln(&input)
}
