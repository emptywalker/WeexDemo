//
//  YHEventHandler.h
//  WeexDemo
//
//  Created by Administrator on 16/8/12.
//  Copyright © 2016年 XuYouhong. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WeexSDK.h>

//#import <WeexSDK/WXEventModuleProtocol.h>
//#import <WeexSDK/WXModuleProtocol.h>

@interface YHEventHandler : NSObject
<WXEventModuleProtocol,
WXModuleProtocol>

@end
