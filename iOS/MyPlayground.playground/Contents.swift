//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

let possibleString: String? = "An optional string."
print(possibleString)

let assumedString: String! = "An implicitly unwrapped optional string."
print(assumedString)


//意思是我声明了一个Optional，它可能包含String，可能不包含
var strValue: Optional<String>
//如果不显示的赋值，就会有个默认值为nil
if strValue == nil {
    print(1)
}