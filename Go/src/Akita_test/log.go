package main

import (
	"bytes"
	"fmt"
	//"log"
	//"os"
	"runtime"
	//"sync"
	"time"
)

func goroutineID() string {
	buf := make([]byte, 100)
	buf = buf[:runtime.Stack(buf, false)]
	return string(bytes.Split(buf, []byte(" "))[1])
}

func debug(v ...interface{}) {
	fmt.Printf("\n\033[34;40m[Debug GO=%s]:\033[0m %s", goroutineID(), fmt.Sprint(v...))
}

func routine(name string, delay time.Duration) {

	t0 := time.Now()
	debug(name, " start at ", t0)

	//time.Sleep(delay)

	t1 := time.Now()
	debug(name, " end at ", t1)

	debug(name, " lasted ", t1.Sub(t0))
}

func main() {
	var numCPU = runtime.NumCPU()
	runtime.GOMAXPROCS(numCPU)

	var name string
	for i := 0; i < 5; i++ {
		name = fmt.Sprintf("go_%02d", i)
		go routine(name, time.Duration(10)*time.Second)
	}
	//fmt.Println(runtime.NumGoroutine())
	var input string
	fmt.Scanln(&input)
	fmt.Println("done")
}
