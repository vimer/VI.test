//
//  ClassMethod.m
//  ClassMethodAndInstanceMethod
//
//  Created by 疯哥 on 8/11/15.
//  Copyright (c) 2015 疯哥. All rights reserved.
//

#import "ClassMethod.h"

@interface ClassMethod()

@property NSString* name;

@end


@implementation ClassMethod

+(void)objRetainOfNotArc {
        id obj_1 = [[NSObject alloc] init];
//        [obj_1 release];
        id obj_2 = [NSMutableArray array];
        [obj_2 retain];
}


@end