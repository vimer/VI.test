//
//  Card.m
//  Machismo
//
//  Created by 疯之提琴 on 4/1/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "./Card.h"

@interface Card()


@end

@implementation Card

-(int)match:(NSArray *)otherCards {
    int score = 0;
    
    for (Card* card in otherCards) {
        if ([card.contents isEqualToString:self.contents]) {
            score = 1;
            break;
        }
    }
    
    return score;
}

@end
