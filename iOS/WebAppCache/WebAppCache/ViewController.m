//
//  ViewController.m
//  WebAppCache
//
//  Created by 疯之提琴 on 5/21/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property (weak, nonatomic) IBOutlet UIButton *refresh;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    webView = [[UIWebView alloc] initWithFrame:CGRectMake(0, 0, 320, 480)];
    webView.scrollView.scrollEnabled = NO;
    [self.view addSubview: webView];
    NSString* str = @"http://192.168.1.24/h5/viewport/";
  // NSString* str = @"http://192.168.1.24/kanzhanlan_web/hybrid-pages/shouye/index.html";
    NSURLRequest *request =[NSURLRequest requestWithURL:[NSURL URLWithString:str]];
    [webView loadRequest:request];
    // Do any additional setup after loading the view, typically from a nib.
    [_refresh addTarget:self action:@selector(refresh) forControlEvents:UIControlEventTouchUpInside];
}

- (void) refresh {
    NSURLRequest *request =[NSURLRequest requestWithURL:[NSURL URLWithString:@"http://192.168.1.24/h5/viewport/"]];
    [webView loadRequest:request];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
