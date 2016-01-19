package main

import "fmt"

func main() {
	s := "hello"
	c := []byte(s)
	c[0] = 'c'
	s2 := string(c)
	fmt.Println(s2)

	s3 := "a" + s2[2:]
	fmt.Println(s3)

	s4 := `hello
	world`
	fmt.Println(s4)
}
