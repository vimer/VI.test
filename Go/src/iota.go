package main

import "fmt"

const (
	x = iota
	y = iota
	z = iota
	w
)

func main() {
	const v = iota
	fmt.Println(v)
}
