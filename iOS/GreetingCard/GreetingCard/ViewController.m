//
//  ViewController.m
//  GreetingCard
//
//  Created by 疯之提琴 on 3/11/15.
//  Copyright (c) 2015 3lengjing. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    CGRect bounds = [[UIScreen mainScreen]applicationFrame];
    self.webView = [[UIWebView alloc]initWithFrame:bounds];
    self.webView.scalesPageToFit = YES;
    self.webView.delegate = self;
    NSString *path = [[NSBundle mainBundle] pathForResource:@"www/index" ofType:@"html"];
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath: path]]];
    [self.view addSubview:self.webView];
}


#pragma mark UIWebViewDelegate

-(void)webViewDidFinishLoad:(UIWebView *)webView {
    NSLog(@"webViewDiDFinishLoad");
    [self.webView stringByEvaluatingJavaScriptFromString:@"showDivMsg('iOS中调用js,Success!')"];
}


- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType {
    NSString* scheme = request.URL.scheme;
    NSString* method = request.URL.host;
    NSString* fragment = request.URL.fragment;
    NSLog(@"scheme=%@,host=%@",scheme, method);
//    NSData *responseData = [fragment dataUsingEncoding:NSUTF8StringEncoding];
//    NSLog(responseData);
//
//    if ( [scheme isEqualToString:@"gap"] ) {
//        if ([actionType isEqualToString:@"XXXClass.XXXmethod"]) {
//
//            NSError* error;
//            NSDictionary* json = [NSJSONSerialization
//                                  JSONObjectWithData:responseData
//                                  options:NSJSONReadingAllowFragments
//                                  error:&error];
//
//            NSLog(@"title: %@ , message: %@",[json objectForKey:@"title"], [json objectForKey:@"message"] );
//
//        }
//    }
    return true;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
