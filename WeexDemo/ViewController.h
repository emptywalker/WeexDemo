//
//  ViewController.h
//  WeexDemo
//
//  Created by Administrator on 16/8/8.
//  Copyright © 2016年 XuYouhong. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WeexSDK/WXSDKInstance.h>

@interface ViewController : UIViewController
/**instace*/
@property (nonatomic, strong) WXSDKInstance *instance;
/**url*/
@property (nonatomic, strong) NSURL *url;

@end

