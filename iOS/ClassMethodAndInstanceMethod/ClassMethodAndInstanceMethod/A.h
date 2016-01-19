//
//  A.h
//  ClassMethodAndInstanceMethod
//
//  Created by 疯哥 on 8/12/15.
//  Copyright (c) 2015 疯哥. All rights reserved.
//


#import <Foundation/Foundation.h>

@interface A : NSObject
//{
//    NSString* _name;
//}
//-(NSString*) name;
//-(void) setName:(NSString*)newName;

//copy
@property (nonatomic) NSString* name;
@property (nonatomic,copy) NSString* nameCopy;

//strong
@property (nonatomic, strong) NSString* stringStrongA_v1;
@property (nonatomic, strong) NSString* stringStrongB_v1;

//weak
@property (nonatomic, strong) NSString* stringStrongA_v2;
@property (nonatomic, weak) NSString* stringWeakB_v2;

@end