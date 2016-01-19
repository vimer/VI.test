package main

import (
	//"log"
	"os"
)

//func FileOpen(fileName string, flag int) *os.File {
//fileHandle, err := os.OpenFile(fileName, flag, os.FileMode(0755))
//if err != nil {
//log.Println(err)
//if os.IsNotExist(err) {
//fileHandle, err = os.Create(fileName)
//if err != nil {
//log.Println(fileName, err)
//return nil
//}
//}
//}
//return fileHandle
//}

func main() {
	fi, _ := os.OpenFile("Hello.go", os.O_RDWR|os.O_APPEND|os.O_CREATE, 0755)
	//fileHandle := FileOpen("./test", os.O_RDWR|os.O_APPEND)
	fi.WriteString("world")
}
