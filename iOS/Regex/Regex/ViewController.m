//
//  ViewController.m
//  Regex
//
//  Created by 疯哥 on 11/4/15.
//  Copyright © 2015 多棱镜. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSRegularExpression *regularExpression = [NSRegularExpression regularExpressionWithPattern:
                                              
                                              @"&tp=webp" options:0 error:nil];
    NSString* content = @"http://?wx_fmt=jpeg&tp=webp&wfrom=5";
    content  = [regularExpression stringByReplacingMatchesInString:content options:0 range:NSMakeRange(0, content.length) withTemplate:@""];
    NSLog(@"%@", content);
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
