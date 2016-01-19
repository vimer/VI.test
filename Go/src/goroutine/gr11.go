package main

import (
	"fmt"
	"time"
)

func counting(c chan<- int) {
	for i := 1; i <= 10; i++ {
		time.Sleep(1 * time.Second)
		c <- i
	}
	close(c)
}

func main() {
	fmt.Println("main start")
	isexit := 0
	c := make(chan int)
	go counting(c)
	for count := range c {
		if isexit > 0 {
			break
		}
		fmt.Println("c:", count)
	}
	fmt.Println("main end")
}
