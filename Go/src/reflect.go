package main

import "fmt"
import "reflect"

func main() {
	var x float64 = 3.4
	p := reflect.ValueOf(x)
	v := p.Elem()
	v.SetFloat(7.1)
	//fmt.Println("type", v.Type)
	fmt.Println(v.Kind(), v)
}
