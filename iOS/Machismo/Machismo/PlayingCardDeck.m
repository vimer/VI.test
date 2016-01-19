//
//  PlayingCardDeck.m
//  Machismo
//
//  Created by 疯之提琴 on 4/2/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "PlayingCardDeck.h"
#import "PlayingCard.h"

@implementation PlayingCardDeck

//继承自NSObject, [[XXX alloc] init]
-(instancetype)init {
    self = [super self];
    
    if (self) {
        for (NSString* suit in [PlayingCard validSuits]) { //花色
            for (NSUInteger rank=1; rank<=[PlayingCard maxRank]; rank++) { //大小
                PlayingCard* card = [[PlayingCard alloc] init]; //初始化一张牌
                card.rank = rank; //花色
                card.suit = suit; //大小
                [self addCard:card];
            }
        }
    }
    
    return self;
}

@end