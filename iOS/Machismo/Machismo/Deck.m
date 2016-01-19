//
//  Deck.m
//  Machismo
//
//  Created by 疯之提琴 on 4/1/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "./Deck.h"

@interface Deck()

@property (strong, nonatomic) NSMutableArray* cards;

@end


//OC中实例变量都是从0开始,对象都是nil初始
@implementation Deck

-(NSMutableArray *)cards {
    if (!_cards) _cards = [[NSMutableArray alloc] init]; //tips, 可在这边进行初始化
    return _cards;
}

-(void)addCard:(Card *)card atTop:(BOOL)atTop {
    if (atTop) {
        //这边程序会崩溃吗? 为什么?
        [self.cards insertObject:card atIndex:0];
    } else {
        [self.cards addObject:card];
    }
}

-(void)addCard:(Card *)card {
    [self addCard:card atTop:NO];
}

-(Card *)drawRandomCard {
    Card* randomCard = nil;
    
    if ([self.cards count]) {
        unsigned index = arc4random() % [self.cards count];
        randomCard = self.cards[index];
        [self.cards removeObjectAtIndex:index];
    }
    
    return randomCard;
}

@end