package main

import (
	"akita"
	"os"
)

func processLine(line []byte) {
	os.Stdout.Write(line)
}

func main() {
	Akita.ReadDirFileLine("./dir", processLine)
}
