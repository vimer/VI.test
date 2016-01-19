//
//  ViewController.h
//  GreetingCard
//
//  Created by 疯之提琴 on 3/11/15.
//  Copyright (c) 2015 3lengjing. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "NSString+URLEncoding.h"

@interface ViewController : UIViewController<UIWebViewDelegate>

@property(strong, nonatomic) UIWebView* webView;

@end

