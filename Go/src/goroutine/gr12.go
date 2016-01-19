package main

import (
	"fmt"
	"log"
	"runtime"
)

func Add(x, y int) {
	z := x + y
	log.Println(z)
}

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	for i := 0; i < 1000; i++ {
		go Add(i, i)
	}

	var input string
	fmt.Scanln(&input)
}
