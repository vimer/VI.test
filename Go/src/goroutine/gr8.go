package main

import "fmt"

func main() {
	//channel
	ch := make(chan int, 1)
	ch <- 1

	//for {
	select {
	case <-ch:
		fmt.Println("1")
	}
	//}
}
