//
//  ViewController.m
//  ClassMethodAndInstanceMethod
//
//  Created by 疯哥 on 8/11/15.
//  Copyright (c) 2015 疯哥. All rights reserved.
//

#import "ViewController.h"
#import "-fno-objc-arc.h"
#import "-f-objc-arc.h"
#import "A.h"
#import "B.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
//    [F_OBJC_ARC objRetainOfArc];
//    [FNO_OBJC_ARC objRetainOfNotArc];
    [F_OBJC_ARC checkMemoryLeak];
    
    //copy例子
    A* a = [[A alloc] init];
    NSMutableString *nameStr = [NSMutableString stringWithString:@"Jink2005"];
    a.name = nameStr;
    a.nameCopy = nameStr;
    [nameStr appendString:@"world"];
    NSLog(@"%@, %@, %@", a.name, a.nameCopy, nameStr);
    
    //strong
    a.stringStrongA_v1 = [[NSString alloc] initWithUTF8String:"hello"];
    a.stringStrongB_v1 = a.stringStrongA_v1;
    a.stringStrongA_v1 = nil;
    NSLog(@"stringStrongA_v1=%@, stringStrongB_v1 = %@", a.stringStrongA_v1, a.stringStrongB_v1);
    
    //weak
    a.stringStrongA_v2 =  [[NSString alloc] initWithUTF8String:"world"];
    a.stringWeakB_v2 = a.stringStrongA_v2;
    a.stringStrongA_v2 = nil;
    NSLog(@"stringStrongA_v2=%@, stringWeakB_v2 = %@", a.stringStrongA_v2, a.stringWeakB_v2);
    
    //blocks{{
    __block int val = 1;
    void (^blk)(void) = ^{printf("val=%d\n", val);};
    val = 2;
    blk();
    //}}
    
    int (^Multiply)(int, int) = ^(int num1, int num2) {
        return num1 * num2;
    };
    int result = Multiply(7, 4); // Result is 28.
    NSLog(@"%d", result);
    
    //{{{
    NSNumber *(^randArray)(void) = ^{
        int rand = arc4random() % 100;
        NSNumber* number = [NSNumber numberWithInt:rand];
        return number;
    };
    
    NSMutableArray* array1 = [[NSMutableArray alloc] init];
    NSMutableArray* array2 = [[NSMutableArray alloc] init];
    
    //预装10个随机数
    for (NSInteger index = 0; index<10; index++) {
        [array1 addObject:randArray()];
    }
    
    for (NSInteger index = 0; index<5; index++) {
        [array2 addObject:randArray()];
    }
    
    //输出结果
    for (NSInteger index = 0; index<10; index++) {
        NSLog(@"%d", array1[index]);
    }
    //}}}
    
    //{{{
    NSArray *array = @[@"A", @"B", @"C", @"A", @"B", @"Z", @"G", @"are", @"Q"];
    NSSet *filterSet = [NSSet setWithObjects: @"A", @"Z", @"Q", nil];
    
    BOOL (^test)(id obj, NSUInteger idx, BOOL *stop);
    
    test = ^(id obj, NSUInteger idx, BOOL *stop) {
        
        if (idx < 5) {
            if ([filterSet containsObject: obj]) {
                return YES;
            }
        }
        return NO;
    };
    
    NSIndexSet* indexes = [array indexesOfObjectsPassingTest:test];
                           
    
    NSLog(@"indexes: %@", indexes);
    //}}}

    //GCD
    
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
