//
//  ViewController.m
//  ScrollView
//
//  Created by 疯哥 on 10/15/15.
//  Copyright © 2015 多棱镜. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.scrollView.contentSize = CGSizeMake(320, 600);
//    self.g_view.frame = CGRectMake(0, 34, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height-480);
//    [self.view addSubview:self.g_view];
//    viewFrame.size.height -= 200;
    
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
