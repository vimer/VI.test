package main

import "fmt"
import "time"
import "runtime"
import "math/rand"

//import (
////debug "github.com/funny/debug"
//)

import debug "github.com/infogeeker/akita"

func routine(name string, delay time.Duration) {

	t0 := time.Now()
	debug.Debug(name, " start at ", t0)

	time.Sleep(delay)

	t1 := time.Now()
	debug.Debug(name, " end at ", t1)

	debug.Debug(name, " lasted ", t1.Sub(t0))
}

func main() {

	var numCPU = runtime.NumCPU()
	runtime.GOMAXPROCS(numCPU)

	//生成随机种子
	rand.Seed(time.Now().Unix())

	var name string
	for i := 0; i < 2; i++ {
		name = fmt.Sprintf("go_%02d", i) //生成ID
		//生成随机等待时间，从0-4秒
		//go routine(name, time.Duration(rand.Intn(20))*time.Second)
		go routine(name, time.Duration(10)*time.Second)
	}

	////让主进程停住，不然主进程退了，goroutine也就退了
	var input string
	fmt.Scanln(&input)
	fmt.Println("done")
}
