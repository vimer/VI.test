package main

import "fmt"

func main() {
	var myArray [10]int = [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	var mySlice []int = myArray[:5]
	for _, v := range myArray {
		fmt.Print(v, " .")
	}
	mySlice = append(mySlice, 12)
	fmt.Println()

	for _, v := range mySlice {
		fmt.Print(v, " ")
	}

	fmt.Println("\n\n")

	mySlice2 := make([]int, 5, 10)
	fmt.Println(len(mySlice2))
	fmt.Println(cap(mySlice2))
	mySlice2 = append(mySlice2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
	mySlice = append(mySlice2, mySlice...)
	fmt.Println(mySlice2, mySlice)

	slice1 := []int{1, 2, 3, 4, 5}
	slice2 := []int{5, 4, 3}

	copy(slice1, slice2)
	fmt.Println(slice1)

	fmt.Println("#############slice ref################")

	var array = [10]byte{'a', 'b', 'c', 'd', 'e', 'f'}

	var aSlice, bSlice []byte

	aSlice = array[:3]
	bSlice = aSlice[1:3]
	fmt.Println(aSlice, bSlice)
	aSlice[1] = 'm' //array[3:8]
	fmt.Println(aSlice, bSlice)

	link := make([]string, 0, 100)
	link = append(link, "test")
	link = append(link, "test")
	fmt.Println(link)

}
