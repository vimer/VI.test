//
//  ViewController.m
//  animation_2
//
//  Created by 疯哥 on 12/11/15.
//  Copyright © 2015 多棱镜. All rights reserved.
//

#import "ViewController.h"
#import "Global.h"

@interface ViewController ()
@property (strong, nonatomic) UIImageView* huajuanFinish;
@property (strong, nonatomic) UIImageView* huazhou;
@property (strong, nonatomic) UIImageView* zhezhao;
@property (strong, nonatomic) UIScrollView *scrollView;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
//    //1.创建核心动画
//    CAKeyframeAnimation *keyAnima=[CAKeyframeAnimation animation];
//    //平移
//    keyAnima.keyPath=@"position";
//    //1.1告诉系统要执行什么动画
//    NSValue *value1=[NSValue valueWithCGPoint:CGPointMake(100, 100)];
//    NSValue *value2=[NSValue valueWithCGPoint:CGPointMake(200, 100)];
//    NSValue *value5=[NSValue valueWithCGPoint:CGPointMake(220, 220)];
//    keyAnima.values=@[value1,value2,value5];
//    //1.2设置动画执行完毕后，不删除动画
//    keyAnima.removedOnCompletion=NO;
//    
//    keyAnima.additive = YES;
//    keyAnima.calculationMode =  kCAAnimationCubicPaced;
//    //1.3设置保存动画的最新状态
//    keyAnima.fillMode=kCAFillModeForwards;
//    //1.4设置动画执行的时间
//    keyAnima.duration=4.0;
//    //1.5设置动画的节奏
////    keyAnima.timingFunction=[CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseInEaseOut];
//    
//    //设置代理，开始—结束
//    keyAnima.delegate=self;
//    //2.添加核心动画
//    [keyAnima setValue:@"aaa" forKey:@"TAG"];
//    [greenView.layer addAnimation:keyAnima forKey:@"TAG"];
    
//    self.test = [[UIImageView alloc] init];
//    [self.test  setImage:[UIImage imageNamed:@"image_3"]];
//    self.test.frame = CGRectMake(0, 0, 232, 603);
//    [self.view addSubview:self.test];
//    
////    //创建CAKeyframeAnimation
//    CAKeyframeAnimation *animation = [CAKeyframeAnimation animationWithKeyPath:@"contents"];
//    animation.duration = 4;
//    animation.delegate = self;
////
////    //存放图片的数组
//    NSMutableArray *array = [NSMutableArray array];
//        [array addObject:[UIImage imageNamed:@"image_1"].CGImage];
//        [array addObject:[UIImage imageNamed:@"image_2"].CGImage];
//    
//    animation.values = array;
////
//    [self.test.layer addAnimation:animation forKey:nil];
    
//    UIView *greenView = [UIView new];
//    greenView.frame = CGRectMake(0, 0, 300, 300);
//    greenView.backgroundColor = [UIColor greenColor];
////    greenView.center = self.view.center;
//    greenView.clipsToBounds = YES;
//    [self.view addSubview:greenView];
    
    //scrollView 初始化
    
    
}

-(void)animationDidStart:(CAAnimation *)anim {
    NSLog(@"开始动画");
}

-(void)animationDidStop:(CAAnimation *)anim finished:(BOOL)flag {
//    if ([self.test.layer animationForKey:@"TAG"] == anim){
//        NSLog(@"....");
//    }
    NSString *strTag = [anim valueForKey:@"TAG"];
    if ([strTag isEqualToString:@"aaa"]) {
        NSLog(@"....");
    }
    NSLog(@"结束动画");
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
