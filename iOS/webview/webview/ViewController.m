//
//  ViewController.m
//  webview
//
//  Created by 疯哥 on 11/2/15.
//  Copyright © 2015 多棱镜. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (nonatomic,strong) UIWebView* webView;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.webView = [[UIWebView alloc] initWithFrame:CGRectMake(0, 0, 300, 500)];
//    NSString *HTMLData = @"<img data-s='300,640' data-type='jpeg' data-src='http://mmbiz.qpic.cn/mmbiz/lh6YlJrDJy5oEZnK4X92QfJtG4QkTf8LwTJwmSWTRicBmC52F3kRUYibeEjMB80VVAsib5KfNT94Uaxkk3ym25p7w/0?wx_fmt=jpeg' data-ratio='0.68' data-w='500' src='http://mmbiz.qpic.cn/mmbiz/lh6YlJrDJy5oEZnK4X92QfJtG4QkTf8LwTJwmSWTRicBmC52F3kRUYibeEjMB80VVAsib5KfNT94Uaxkk3ym25p7w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1' style='margin: 0px; padding: 0px; height: auto !important; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; width: auto !important; visibility: visible !important;'/>";
//    NSString *HTMLData = @"<img src='http://mmbiz.qpic.cn/mmbiz/lh6YlJrDJy5oEZnK4X92QfJtG4QkTf8LwTJwmSWTRicBmC52F3kRUYibeEjMB80VVAsib5KfNT94Uaxkk3ym25p7w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1' style='margin: 0px; padding: 0px; height: auto !important; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; width: auto !important; visibility: visible !important;'/>";http://www.wenwuchina.com/upload/2015/10/30/20151030093043427.jpg'/
    
//    NSString *HTMLData = @"<!DOCTYPE html><html><img src='http://www.wenwuchina.com/upload/2015/10/30/20151030093043427.jpg'/ /></html>";
//    NSString *HTMLData = @"<!DOCTYPE html><html><img data-s='300,640' data-type='jpeg' data-src='http://mmbiz.qpic.cn/mmbiz/lh6YlJrDJy5oEZnK4X92QfJtG4QkTf8LHsG8rbtYfnpaicAMQXZ4XDLt3tjwMicnPdgic30MkIriaup6sw0FFofNJw/0?wx_fmt=jpeg' data-ratio='0.87' data-w='500' src='http://mmbiz.qpic.cn/mmbiz/lh6YlJrDJy5oEZnK4X92QfJtG4QkTf8LwTJwmSWTRicBmC52F3kRUYibeEjMB80VVAsib5KfNT94Uaxkk3ym25p7w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1' width='500' height='340' style='-webkit-user-select'/></html>";
//    NSRegularExpression *regularExpression = [NSRegularExpression regularExpressionWithPattern:
    
//                                              @"http://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?(.*?)" options:0 error:nil];
//    NSString* content = @"http://?wx_fmt=jpeg&tp=webp&wfrom=5";
//    HTMLData = [regularExpression stringByReplacingMatchesInString:HTMLData options:0 range:NSMakeRange(0, HTMLData.length) withTemplate:@"$0"];
    NSString* HTMLData = @"<html></html><script type='text/javascript'>document.write('hello');var testWebp = function(callback){ var image = new Image(); image.onerror = function(){ callback && callback(false); } image.onload = function(){ callback && callback(image.width == 1); } image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA=='; }; testWebp(function(flag){ if(flag){ document.write('恭喜，浏览器支持webp'); }else{ document.write('抱歉，浏览器不支持webp'); } });</script>";
    NSLog(@"%@", HTMLData);
    [self.webView loadHTMLString:HTMLData  baseURL:nil];
    [self.view addSubview: self.webView];
//    [self.webView loadRequest:request];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
