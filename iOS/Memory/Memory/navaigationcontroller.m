//
//  navaigationcontroller.m
//  Memory
//
//  Created by 疯哥 on 8/3/15.
//  Copyright (c) 2015 疯哥. All rights reserved.
//

#import "navaigationcontroller.h"
#import "navaigationcontroller.h"
@interface navaigationcontroller ()

@end
@implementation navaigationcontroller
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    UIButton *button =[[UIButton alloc] initWithFrame:CGRectMake(100, 100, 100, 100)];
    [button setTitle:@"button" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(clickbutton) forControlEvents:UIControlEventTouchUpInside];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(void)clickbutton {
    navaigationcontroller *nav = [[navaigationcontroller alloc] init];
    [[self pushViewController:nav animated:YES];
}
     
@end
     
