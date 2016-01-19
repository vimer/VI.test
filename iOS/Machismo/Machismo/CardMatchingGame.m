//
//  CardMatchingGame.m
//  Machismo
//
//  Created by 疯之提琴 on 4/3/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "CardMatchingGame.h"

@interface CardMatchingGame()

@property (nonatomic, strong) NSMutableArray* cards;
@property (nonatomic, readwrite) NSUInteger score;

@end

@implementation CardMatchingGame

-(NSMutableArray *)cards {
    if (!_cards) _cards = [[NSMutableArray alloc] init];
    return _cards;
}

//初始化Card
-(instancetype)initWithCardCount:(NSUInteger)count usingDeck:(Deck *)deck {
    self = [super self];
    
    if (self) {
        for (int i=0; i<count; i++) {
            Card* card = [deck drawRandomCard];
            if (card) {
                [self.cards addObject:card];
            } else {
                self = nil;
                break;
            }
        }
        
    }
    
    return self;
}

-(Card *)cardAtIndex:(NSUInteger)index {
    return (index<[self.cards count]) ? self.cards[index]:nil;
}

static const int MISMATCH_PENALTY = 2;
static const int MATCH_BONUS = 4;
static const int COST_TO_CHOOSE = 1;

//This contains the primary logic of this class
-(void)chooseCardAtIndex:(NSUInteger)index {
   
    PlayingCard* card = [self cardAtIndex:index];
//    NSLog(@"Matched=%d, Chosen=%d", card.isMatched, card.isChosen);
    if (card.isMatched) {
        if (card.isChosen) {
            card.chosen = NO;
        }
    } else { //待匹配状态
        for (Card* otherCard in self.cards) {
            //如果已经选择但没有匹配
            if (otherCard.isChosen && !otherCard.isMatched) {
                int matchScore = [card match:@[otherCard]];
                if (matchScore) {
                    self.score += matchScore;
                    otherCard.matched = YES;
                    card.matched = YES;
                } else {
                    self.score -= MISMATCH_PENALTY;
                    otherCard.chosen = NO;
                    card.matched = NO;
                }
                break;
            }
        }
        self.score -= COST_TO_CHOOSE;
        card.chosen = YES;
    }
}

@end

