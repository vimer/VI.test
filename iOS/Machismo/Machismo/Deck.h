//
//  Deck.h
//  Machismo
//
//  Created by 疯之提琴 on 4/1/15.
//  Copyright (c) 2015 InfoGeeker. All rights reserved.
//

//牌堆

#import <Foundation/Foundation.h>
#import "./Card.h"

@interface  Deck : NSObject

//插入牌堆
//此方法名称为addCard atTop 参数为card  和  atTop
-(void)addCard:(Card *)card atTop:(BOOL)atTop;
-(void)addCard:(Card *)card;

//随机扑克牌
-(void*)drawRandomCard;

@end