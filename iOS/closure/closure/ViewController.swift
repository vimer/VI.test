//
//  ViewController.swift
//  closure
//
//  Created by 疯之提琴 on 6/2/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        
        
        var names = ["Swift", "Arial", "Soga", "Donary"]
        
        // 第一种方式：使用函数
        func backwards(firstString: String, secondString: String) -> Bool {
            return firstString > secondString // 升序排序
        }
        // 这里第二个参数，传了一个函数
        // reversed is equal to ["Swift", "Soga", "Donary", "Arial"]
        var reversed = sort(&names, backwards)
        print(reversed)
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

