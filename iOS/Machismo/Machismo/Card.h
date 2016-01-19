//
//  Card.h
//  Machismo
//
//  Created by 疯之提琴 on 4/1/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Card : NSObject

//卡牌内容
@property (strong, nonatomic) NSString* contents;

@property (nonatomic, getter=isChosen) BOOL chosen;
@property (nonatomic, getter=isMatched) BOOL matched;

//匹配卡牌内容
-(int)match:(NSArray *)otherCards;

@end