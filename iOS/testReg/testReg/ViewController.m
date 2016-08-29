//
//  ViewController.m
//  testReg
//
//  Created by 疯哥 on 8/18/16.
//  Copyright © 2016 疯哥. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    NSString *re = @"(?<=@)((?:[A-Za-z0-9]+(?:[\\-|\\.][A-Za-z0-9]+)*)+\\.[A-Za-z]{2,6})$";
    NSRange range = [email rangeOfString:re options:NSRegularExpressionSearch];
    if (range.location != NSNotFound) {
        return [email substringWithRange:range];
    } else {
      
    }
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
