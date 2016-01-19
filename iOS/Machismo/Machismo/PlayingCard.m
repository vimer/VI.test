//
//  PlayingCard.m
//  Machismo
//
//  Created by 疯之提琴 on 4/1/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

#import "PlayingCard.h"

@implementation PlayingCard

-(int)match:(NSArray *)otherCards {
    
    int score = 0;
    if ([otherCards count] == 1) {
        id card = [otherCards firstObject];
        if ([card isKindOfClass:[PlayingCard class]]) {
            PlayingCard* otherCard = [otherCards firstObject];
            NSLog(@"%d,%@", self.rank, self.suit);
            if (otherCard.rank == self.rank) { //比较数字
                score = 16;
            } else if ([otherCard.suit isEqualToString:self.suit]) { //比较花色
                score = 4;
            }
        }
    }
    
    return score;
}

@synthesize suit = _suit;

-(void)setSuit:(NSString *)suit {
    if ([[PlayingCard validSuits] containsObject:suit]) {
        _suit = suit;
    }
}

-(NSString *)suit {
    return _suit ? _suit : @"?";
}

//Class methods start with +
//instance methods start with -
+(NSArray *)validSuits {
    return @[@"♥",@"♦",@"♠",@"♣"];
}

+(NSArray *)rankStrings {
    return @[@"?",@"A",@"2",@"3",@"4",@"5",@"6",@"7",@"8",@"9",@"10",@"J",@"Q",@"K"];
}

+(NSUInteger)maxRank {
    return [[self rankStrings] count]-1;
}

-(void)setRank:(NSUInteger)rank {
    if (rank <= [PlayingCard maxRank]) {
        _rank = rank;
    }
}

//继承自Card
-(NSString *)contents {
    NSArray* rankStrings = [PlayingCard rankStrings];
    //return [NSString stringWithFormat:@"%d%@", self.rank, self.suit];
    return [rankStrings[self.rank] stringByAppendingString:self.suit]; //连接字符串
    
}

@end