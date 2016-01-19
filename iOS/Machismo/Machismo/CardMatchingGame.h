//
//  CardMatchingGame.h
//  Machismo
//
//  Created by 疯之提琴 on 4/3/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Deck.h"
#import "PlayingCard.h"

@interface CardMatchingGame : NSObject
//designated initalizer
-(instancetype)initWithCardCount:(NSUInteger)count usingDeck:(Deck *)deck;
-(void)chooseCardAtIndex:(NSUInteger)index;
-(Card *)cardAtIndex:(NSUInteger)index;

@property (nonatomic, readonly) NSUInteger score;

@end