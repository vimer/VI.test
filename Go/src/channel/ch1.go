package main

import "fmt"

func sum(a []int, c chan int) {
	fmt.Println(a)
	total := 0
	for _, v := range a {
		total += v
	}
	c <- total // send total to c
}

func main() {
	//a := []int{7, 2, 8, -9, 4, 0}

	//c := make(chan int)
	//go sum(a[:len(a)/2], c)
	//go sum(a[len(a)/2:], c)
	//x, y := <-c, <-c // receive from c

	//fmt.Println(x, y, x+y)
	//fmt.Println("#########")
	c1 := make(chan int, 2) //修改2为1就报错，修改2为3可以正常运行
	c1 <- 1
	c1 <- 2
	fmt.Println(<-c1)
	fmt.Println(<-c1)
}
