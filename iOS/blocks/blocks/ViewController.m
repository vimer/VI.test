//
//  ViewController.m
//  blocks
//
//  Created by 疯哥 on 8/13/15.
//  Copyright (c) 2015 疯哥. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController


int multiplier = 7;

int myBlock_v1(int num) {
    return num * multiplier;
}

+ (int)myBlock_v2:(int)num {
    return num * multiplier;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
    //{{{case 1：(A block is an anonymous inline collection of code) 风格有点像js，方法中直接定义函数
    int (^myBlock_v3)(int) = ^(int num) {
        return num * multiplier;
    };
    
    printf("%d\n", myBlock_v1(3));
    printf("%d\n", [ViewController myBlock_v2:3]);
    printf("%d\n", myBlock_v3(3));
    //}}}
    
    //{{{case 2  __block variables
//    int val = 1;
    __block int val = 1;
    void (^testBlock)(void) = ^{printf("val=%d\n", val);};
    val = 2;
    testBlock();
    //}}}
    
    //{{{case 3 （ declare them using syntax similar to that you use to declare a pointer to a function, except that you use ^ instead of *）
    void (^blockReturningVoidWithVoidArgument)(void);
    int (^blockReturningIntWithIntAndCharArguments)(int, char);
    void (^arrayOfTenBlocksReturningVoidWithIntArgument[10])(int);
    //}}}
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
