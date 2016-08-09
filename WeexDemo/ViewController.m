//
//  ViewController.m
//  WeexDemo
//
//  Created by Administrator on 16/8/8.
//  Copyright © 2016年 XuYouhong. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property (nonatomic, strong) UIView *weexView;

@end

@implementation ViewController

- (void)dealloc{
    [self.instance destroyInstance];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = self.view.frame;
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

- (NSURL *)url{
    if(!_url){
        _url = [[NSBundle mainBundle]URLForResource:@"BuiltInComponents" withExtension:@"js"];
    }
    return _url;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
