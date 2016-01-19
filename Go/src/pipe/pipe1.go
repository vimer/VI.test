package main

import (
	"fmt"
	"os/exec"
)

func main() {
	var cmd0 = exec.Command("echo", "-n", "My first Command from golang.")
	var stdout0, err = cmd0.StdoutPipe()
	if err != nil {
		fmt.Println("error!%s", err)
		return
	} else {
		output0 := make([]byte, 30)
		n, err := stdout0.Read(output0)
		if err != nil {
			fmt.Println("error")
			return
		}
		fmt.Println("%s", output0[:n])
	}
}
