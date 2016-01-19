package main

import (
	"runtime"
	"sync"
)

//如果一个goroutine没有被阻塞，那么别的goroutine就不会得到执行
func main() {
	//runtime.GOMAXPROCS(4)
	wg := new(sync.WaitGroup)
	wg.Add(2)
	go func() {
		defer wg.Done()
		for i := 0; i < 6; i++ {
			println(i)
			if i == 3 {
				runtime.Gosched()
			}
		}
	}()
	go func() {
		defer wg.Done()
		println("Hello, World!")
	}()
	wg.Wait()
}
