package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"runtime"
)

func Request(url string) (content string) {
	client := &http.Client{}
	req, getErr := http.NewRequest("GET", url, nil)
	if getErr != nil {
		log.Println(getErr)
		return
	}
	resp, _ := client.Do(req)
	if resp.StatusCode == 403 {
		log.Println(resp, url)
	}
	if resp.StatusCode == 404 {
		log.Println(resp, url)
	}
	data, readErr := ioutil.ReadAll(resp.Body)
	if readErr != nil {
		log.Println(readErr)
		return
	}
	content = string(data)
	defer resp.Body.Close()
	return
}

func test(i int) {
	go func() {
		log.Println(i)
		Request("http://www.dianping.com/shop/2107453/")
	}()
}

func main() {
	runtime.GOMAXPROCS(4)

	for i := 0; i < 200; i++ {
		test(i)
	}
	//等待线程执行完
	var input string
	fmt.Scanln(&input)
}
