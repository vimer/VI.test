//
//  ViewController.m
//  DynamicBinding
//
//  Created by 疯之提琴 on 4/4/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "ViewController.h"
#import "Ship.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    Ship* s = [[Ship alloc] init];
    [s shoot]; //ok
    [s move];  //ok
    
    Vehicle* v = s;
    [v shoot];
    if ([s isMemberOfClass:[Ship class]]) {
        NSLog(@"hello");
    }
    
    if ([v respondsToSelector:@selector(shoot)]) {
        NSLog(@"world");
    }
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
