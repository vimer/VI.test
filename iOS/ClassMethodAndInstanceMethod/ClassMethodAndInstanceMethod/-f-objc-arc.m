//
//  -f-objc-arc.m
//  ClassMethodAndInstanceMethod
//
//  Created by 疯哥 on 8/12/15.
//  Copyright (c) 2015 疯哥. All rights reserved.
//

#import "-f-objc-arc.h"

@interface F_OBJC_ARC()

@end

@implementation F_OBJC_ARC

+(void)objRetainOfArc {
    id obj_1 = [[NSObject alloc] init];
    //        [obj_1 release];
    id obj_2 = [NSMutableArray array];
}

+(void)checkMemoryLeak {
}


@end