package main

import "fmt"

type PersonInfo struct {
	ID      string
	Name    string
	Address string
}

func main() {
	var personDB map[string]PersonInfo
	personDB = make(map[string]PersonInfo)
	personDB["123"] = PersonInfo{"123", "asd", "adasdd..."}
	personDB["1"] = PersonInfo{"1", "asdd", "asd"}

	person, ok := personDB["123"]
	if ok {
		fmt.Println(person.Name)
	} else {
		fmt.Println("not found")
	}
}
