package main

import (
	"fmt"
	"runtime"
)

func init() {
	fmt.Println("%v\n", m)
	info = fmt.Sprintf("%s, %s", runtime.GOOS, runtime.GOARCH)
}

var m map[int]string = map[int]string{1: "A", 2: "B", 3: "C"}

var info string

func main() {
	fmt.Println(info)
}
