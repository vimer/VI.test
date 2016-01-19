//
//  ViewController.swift
//  Calc
//
//  Created by 疯哥 on 10/19/15.
//  Copyright © 2015 多棱镜. All rights reserved.
//

import UIKit

//!和?
//performOperation({$1 * $2})
class ViewController: UIViewController {

    @IBOutlet weak var display: UILabel!

    var userIsInTheMiddleOfTypingNumber: Bool = false;
    
    @IBAction func appendDigit(sender: UIButton) {
        let digit = sender.currentTitle!
        if userIsInTheMiddleOfTypingNumber {
            display.text = display.text! + digit
        } else {
            display.text = digit
            userIsInTheMiddleOfTypingNumber = true
        }
        print("digit=\(digit)")
    }
    
    @IBAction func operate(sender: UIButton) {
        if userIsInTheMiddleOfTypingNumber {
            enter()
        }
        let symbol = sender.currentTitle!
        switch symbol {
        case "*":
//            performOperation(multiply)
//            performOperation({(op1, op2) in return op1 * op2})
//            performOperation({(op1, op2) in op1 * op2})
//            performOperation({$0 * $1})
            performOperation(){$0 * $1} //如果performOperation前面还有其他参数，那么可以把{}移动到外面
        case "÷":
            performOperation(divide)
        case "+":
            performOperation(plus)
        case "-":
            performOperation(sub)
        case "⌜":
            performOperation({sqrt($0)})
        default:
            print("default");
        }
    }
    
    //参数为两个Double， 返回值为Double
    func multiply(op1: Double, op2: Double) -> Double {
        return op1 * op2
    }
    
    func divide(op1:Double, op2:Double) -> Double {
        return op2 / op1
    }
    
    func plus(op1:Double, op2:Double) -> Double {
        return op1 + op2
    }
    
    func sub(op1:Double, op2:Double) -> Double {
        return op2 - op1
    }
    
    @objc(performOperationWithTwoOperand:)
    func performOperation(operation: (Double, Double) -> Double) {
        if operandStack.count >= 2 {
            displayValue = operation(operandStack.removeLast(), operandStack.removeLast())
            enter()
        }
    }
    
    @objc(performOperationWithOneOperand:)
    func performOperation(operation: Double -> Double) {
        if operandStack.count >= 1 {
            displayValue = operation(operandStack.removeLast())
            enter()
        }
    }
    
    var operandStack = Array<Double>()
    @IBAction func enter() {
        userIsInTheMiddleOfTypingNumber = false;
        operandStack.append(displayValue)
        print("operandStack = \(operandStack)")
    }
    
    var displayValue: Double {
        get {
            return NSNumberFormatter().numberFromString(display.text!)!.doubleValue
        }
        set {
            display.text = "\(newValue)"
            userIsInTheMiddleOfTypingNumber = false
        }
    }
    
    
}

