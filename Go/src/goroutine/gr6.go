package main

import (
	"fmt"
	"runtime"
)

func say(s string) {
	for i := 0; i < 10000000; i++ {
		runtime.Gosched()
		fmt.Println(s)
	}
}

func main() {
	go say("world") //开一个新的Goroutines执行
	say("hello")    //当前Goroutines执行
}
