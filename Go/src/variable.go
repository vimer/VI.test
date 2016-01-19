package main

import "fmt"

func GetName() (firstName, lastName, nickName string) {
	return "may", "Chan", "Chibi Maruko"
}

func main() {
	i := 1
	j := 2
	j = 3
	i, j = j, i
	fmt.Println(i, j)
	_, _, nickName := GetName()
	fmt.Println(nickName)

	const (
		c0 = iota
		c1
		c2
	)
	fmt.Println(c0, c1, c2)

	str := "Hello,world"
	n := len(str)
	fmt.Println(n)
	for i := 0; i < n; i++ {
		ch := str[i]
		fmt.Println(i, ch)
	}

}
