//
//  NSString+URLEncoding.h
//  GreetingCard
//
//  Created by 疯之提琴 on 3/11/15.
//  Copyright (c) 2015 3lengjing. All rights reserved.
//


#import "NSString+URLEncoding.h"

@implementation NSString (URLEncoding)


- (NSString *)URLEncodedString
{
    NSString *result = (NSString *)
    CFBridgingRelease(CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,
                                                              (CFStringRef)self,
                                                              NULL,
                                                              CFSTR("!*'();:@&amp;=+$,/?%#[] "),
                                                              kCFStringEncodingUTF8));
    return result;
}

- (NSString*)URLDecodedString                                       
{
    NSString *result = (NSString *)
    CFBridgingRelease(CFURLCreateStringByReplacingPercentEscapesUsingEncoding(kCFAllocatorDefault,
                                                                              (CFStringRef)self,
                                                                              CFSTR(""),
                                                                              kCFStringEncodingUTF8));
    return result;
}

@end
