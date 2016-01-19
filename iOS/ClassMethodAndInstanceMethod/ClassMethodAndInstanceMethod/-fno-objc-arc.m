//
//  -fno-objc-arc.m
//  ClassMethodAndInstanceMethod
//
//  Created by 疯哥 on 8/12/15.
//  Copyright (c) 2015 疯哥. All rights reserved.
//

#import "-fno-objc-arc.h"

@interface FNO_OBJC_ARC()

@end


@implementation FNO_OBJC_ARC

+(void)objRetainOfNotArc {
    id obj_1 = [[NSObject alloc] init];
    //        [obj_1 release];
    id obj_2 = [NSMutableArray array];
    [obj_2 retain];
}

@end

