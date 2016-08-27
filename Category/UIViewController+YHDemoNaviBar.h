//
//  UIViewController+YHDemoNaviBar.h
//  WeexDemo
//
//  Created by Administrator on 16/8/13.
//  Copyright © 2016年 XuYouhong. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIViewController (YHDemoNaviBar)
<UIGestureRecognizerDelegate>

/**
 *back button click action
 *@param sender  responder
 */
- (void)backButtonClicked:(id)sender;

- (void)setupNaviBar;

@end
