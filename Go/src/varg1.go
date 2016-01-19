package main

import "fmt"

//func MyPrint(args ...interface{}) {
func MyPrint(args []int)
	for _, arg := range args {
		switch arg.(type) {
		case int:
			fmt.Println(arg)
		case string:
			fmt.Println(arg)
		case int64:
			fmt.Println(arg)
		default:
			fmt.Println(arg)
		}
	}
}

func main() {
	var v1 int = 1
	var v2 int64 = 245
	var v3 string = "hello"
	var v4 float32 = 1.234
	MyPrint(v1, v2, v3, v4)
}
