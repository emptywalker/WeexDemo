//
//  UIViewController+YHDemoNaviBar.m
//  WeexDemo
//
//  Created by Administrator on 16/8/13.
//  Copyright © 2016年 XuYouhong. All rights reserved.
//

#import "UIViewController+YHDemoNaviBar.h"
#import <objc/runtime.h>



@implementation UIViewController (YHDemoNaviBar)

- (void)setupNaviBar{
    //add left gesture to pop 
    UIScreenEdgePanGestureRecognizer *edgePanGestureRecognizer = [[UIScreenEdgePanGestureRecognizer alloc]initWithTarget:self action:@selector(edgePanGesture:)];
    edgePanGestureRecognizer.delegate = self;
    edgePanGestureRecognizer.edges = UIRectEdgeLeft;
    [self.view addGestureRecognizer:edgePanGestureRecognizer];
}

- (void)edgePanGesture:(UIScreenEdgePanGestureRecognizer *)gesture{
    [self.navigationController popViewControllerAnimated:YES];
}

@end
