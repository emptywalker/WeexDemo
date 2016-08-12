//
//  YHMainViewController.m
//  WeexDemo
//
//  Created by Administrator on 16/8/12.
//  Copyright © 2016年 XuYouhong. All rights reserved.
//

#import "YHMainViewController.h"
#import <WeexSDK/WXSDKInstance.h>

@interface YHMainViewController ()

/**instace*/
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
/**heigt*/
@property (nonatomic, assign) float weexHeight;

@end

@implementation YHMainViewController
- (void)dealloc{
    [self.instance destroyInstance];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.automaticallyAdjustsScrollViewInsets = NO;
    _weexHeight = self.view.frame.size.height;// - 64;
    [self render];
}

- (void)render{
    CGFloat width = self.view.frame.size.width;
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = CGRectMake(self.view.frame.size.width-width, 0, width, _weexHeight);//self.view.frame;
    [_instance renderWithURL:self.url options:@{@"bundleUrl":[self.url absoluteString]} data:nil];
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        weakSelf.weexView = view;
        [weakSelf.weexView removeFromSuperview];
        [weakSelf.view addSubview:weakSelf.weexView];
    };
    
    _instance.onFailed = ^(NSError *error) {
        //process failure
        NSLog(@"render failed");
    };
    
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
        NSLog(@"render finish");
    };
}


//- (NSURL *)url{
//    if(!_url){
//        _url = [[NSBundle mainBundle]URLForResource:@"AppDelegatePage" withExtension:@"js"];//BuiltInComponents//Test1//DataBinding//Repeat//ComposedComponent//NestingComponent//FindElement
//    }
//    return _url;
//}

@end
