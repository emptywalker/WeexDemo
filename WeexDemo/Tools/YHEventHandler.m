//
//  YHEventHandler.m
//  WeexDemo
//
//  Created by Administrator on 16/8/12.
//  Copyright © 2016年 XuYouhong. All rights reserved.
//

#import "YHEventHandler.h"
#import "YHMainViewController.h"
//#import <WeexSDK/WXBaseViewController.h>


@implementation YHEventHandler

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openURL:))

- (void)openURL:(NSString *)url{
    
    NSURL *URL = [[NSBundle mainBundle]URLForResource:url withExtension:@"js"];
    UIViewController *vc = [[YHMainViewController alloc]init];
    ((YHMainViewController *)vc).url = URL;
    vc.navigationItem.title = url;
    UINavigationController *nav = [weexInstance.viewController navigationController];
    [nav pushViewController:vc animated:YES];
}

@end
