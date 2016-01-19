package main

//import "bytes"
import "fmt"
import "regexp"

func main() {
	//match, _ := regexp.MatchString("p([a-z]+)ch", "peach")
	r, _ := regexp.Compile(`p([a-z]+)ch`)
	//fmt.Println(r.FindAllString("pih peach punch pinch", -1))
	//fmt.Println(match)
	//fmt.Println(r.MatchString("peach"))
	//fmt.Println(r.FindString("pmch peach punch pach"))
	//fmt.Println(r.FindStringIndex("pmch peach punch"))
	//fmt.Println(r.FindStringSubmatch("pmch peach punch"))
	//fmt.Println(r.FindStringSubmatchIndex("peach punch"))
	fmt.Println(r.FindAllStringSubmatchIndex("peach punch pinch", -1))
	//fmt.Println(r.FindAllString("pcch peach punch pinch", 3)) //搜索前3个
	//fmt.Println(r.Match([]byte("pcach pcch")))

	//r = regexp.MustCompile("p([a-z]+)ch")
	////fmt.Println(r)
	//fmt.Println(r.ReplaceAllString("a peach", "<fruit>"))
	//in := []byte("a peach")
	//out := r.ReplaceAllFunc(in, bytes.ToUpper)
	//fmt.Println(string(out))

	//var str = `<div class='pic'>
	//hi

	//</div>`
	//var pn = regexp.MustCompile("\r")
	//str = pn.ReplaceAllString(str, "")
	//fmt.Println(str)
	//var ptn = regexp.MustCompile("<div class='pic'>.*?</div>")
	//fmt.Println(ptn.FindAllString(str, 01))

}
