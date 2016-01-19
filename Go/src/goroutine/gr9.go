package main

import (
	"fmt"
	"runtime"
)

func main() {
	name := "crazy"
	go func() {
		fmt.Println(name)
	}()
	//time.Sleep(time.Millisecond)
	runtime.Gosched()
	name = "baby"
}
