//
//  PlayingCardGameViewController.m
//  Machismo
//
//  Created by 疯之提琴 on 4/6/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "PlayingCardGameViewController.h"
#import "PlayingCardDeck.h"

@implementation PlayingCardGameViewController

- (Deck *)createDeck {
    return [[PlayingCardDeck alloc] init];
}

@end
