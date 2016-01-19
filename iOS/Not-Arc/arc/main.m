//
//  main.m
//  arc
//
//  Created by 疯之提琴 on 3/31/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AppDelegate.h"

int main(int argc, char * argv[]) {
    //自己生成的对象自己持有
    //    id obj = [[NSObject alloc]  init];
//        id obj = [NSObject new];
    //    id obj = [NSObject copy];
    //    id obj = [NSObject mutableCopy];
    //    [obj release]; //其实是在一个很大的autoreleasepool里面跑的，release只是告诉这个内存池可以来回收这个对象的内存了
    
    //自己生成非自己持有
//    id obj = [NSMutableArray array];
//    [obj release];
//    NSLog(@"retainCount=%d", [obj retainCount]);
    
     //Autorelease
     NSAutoreleasePool* pool = [[NSAutoreleasePool alloc] init];
    
    
    @autoreleasepool {
        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    }
}

