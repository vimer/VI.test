package main

import "fmt"

func main() {
	Num := 1
	switch Num {
	case 0:
		fmt.Print(0)
	case 1:
		fmt.Print(4)
		fallthrough
	case 2:
		fmt.Print(6)
	}
}
