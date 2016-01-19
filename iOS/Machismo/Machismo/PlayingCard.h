//
//  PlayingCard.h
//  Machismo
//
//  Created by 疯之提琴 on 4/1/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "Card.h"

@interface PlayingCard : Card

@property (strong, nonatomic) NSString* suit; //黑桃, 梅花, 红心, 方块
@property (nonatomic) NSUInteger rank; //0(rank not set) -> 13(a King)

+(NSArray *)validSuits;
+(NSUInteger)maxRank;

@end