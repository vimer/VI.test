//
//  ViewController.m
//  postData
//
//  Created by 疯哥 on 11/8/15.
//
//

#import "ViewController.h"
#import "AFHTTPSessionManager.h"

@interface ViewController ()
@property (nonatomic,strong) UIWebView* webView;
@end

@implementation ViewController

+ (NSString *)runDir {
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    return [paths.firstObject stringByAppendingPathComponent:@""];
}

- (void)viewDidLoad {
    [super viewDidLoad];
 
    self.webView = [[UIWebView alloc] initWithFrame:CGRectMake(0, 0, self.view.bounds.size.width, self.view.bounds.size.height)];
    self.webView.scalesPageToFit = NO;
    self.webView.scrollView.bounces = NO;
    self.webView.opaque = NO;
    self.webView.autoresizingMask = UIViewAutoresizingFlexibleHeight|UIViewAutoresizingFlexibleWidth;
    self.webView.delegate = self;
    self.webView.opaque = NO;
     NSURLRequest *request =[NSURLRequest requestWithURL:[NSURL URLWithString:@"http://www.baidu.com"]];
//    NSString* HTMLData = @"<html><br><br><br><br><b>hello,worldasdfjadskfjasdkfjasdkfjkadsfjksadfjklsadfjklsdajfklsdjfasdfjkld</b></html>";
//    [self.webView loadHTMLString:HTMLData  baseURL:nil];
    [self.webView loadRequest:request];
    [self.view addSubview: self.webView];
    
    
    NSString* picPath = [NSString stringWithFormat:@"%@/youbiScreen.jpg", [ViewController runDir]];
    NSLog(@"%@", picPath);
    UIGraphicsBeginImageContextWithOptions(self.view.bounds.size, NO, 0.0);
    [self.webView.layer renderInContext:UIGraphicsGetCurrentContext()];
    UIImage* theImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    NSData* theImageData = UIImageJPEGRepresentation(theImage, 1.0); //you can use PNG too
    [theImageData writeToFile:picPath atomically:YES];
    
//    if ([[UIScreen mainScreen] respondsToSelector:@selector(scale)])
//        UIGraphicsBeginImageContextWithOptions(self.view.bounds.size, NO, [UIScreen mainScreen].scale);
//    else
//        UIGraphicsBeginImageContext(self.view.bounds.size);
//    
//    [self.view.layer renderInContext:UIGraphicsGetCurrentContext()];
//    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
//    UIGraphicsEndImageContext();
//    NSData * imgData = UIImagePNGRepresentation(image);
//    if(imgData)
//        [imgData writeToFile:picPath atomically:YES];
//    else
//        NSLog(@"error while taking screenshot");
    
 
//    NSString *urlString = @"http://share.youbi365.com:81/Upload";
//    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
//    [dateFormatter setDateFormat:@"yyyyMMddHHmmss"];
//    NSString *currentDateStr = [dateFormatter stringFromDate:[NSDate date]];
//    NSLog(@"%@", currentDateStr);
//    NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
//    [request setURL:[NSURL URLWithString:urlString]];
//    [request setHTTPMethod:@"POST"];
//    NSString *boundary = @"---------------------------14737809831466499882746641449";
//    NSString *contentType = [NSString stringWithFormat:@"multipart/form-data; boundary=%@",boundary];
//    [request addValue:contentType forHTTPHeaderField: @"Content-Type"];
//    NSMutableData *postbody = [NSMutableData data];
//    [postbody appendData:[[NSString stringWithFormat:@"\r\n--%@\r\n",boundary] dataUsingEncoding:NSUTF8StringEncoding]];
//    [postbody appendData:[[NSString stringWithFormat:@"Content-Disposition: form-data; name=\"userfile\"; filename=\"%@_youbi.jpg\"\r\n", currentDateStr] dataUsingEncoding:NSUTF8StringEncoding]];
//    [postbody appendData:[[NSString stringWithString:@"Content-Type: application/octet-stream\r\n\r\n"] dataUsingEncoding:NSUTF8StringEncoding]];
//    UIImage* myImage = [UIImage imageNamed:picPath];
//    NSData* dataObj = UIImageJPEGRepresentation(myImage, 0.5);
//    [postbody appendData:[NSData dataWithData:dataObj]];
//    [postbody appendData:[[NSString stringWithFormat:@"\r\n--%@--\r\n",boundary] dataUsingEncoding:NSUTF8StringEncoding]];
//    [request setHTTPBody:postbody];
//    
//    NSData *returnData = [NSURLConnection sendSynchronousRequest:request returningResponse:nil error:nil];
//    NSString* returnString = [[NSString alloc] initWithData:returnData encoding:NSUTF8StringEncoding];
//    NSLog(@"%@", returnString);
    
//    NSLog(@"%d,%d,%d,%d,%d,%d", year, month, day, hour, minute, second);
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
