//
//  TestFunction.m
//  timeline
//
//  Created by John Brunton on 14/08/2020.
//  Copyright © 2020 com.pocketlearningapps. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ReactApps.h"

@implementation ReactApps

+ (RCTRootView*) createWelcomeApp {
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];

    RCTRootView *rootView =
      [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                  moduleName: @"WelcomeApp"
                           initialProperties: nil
                               launchOptions: nil];
    return rootView;
}

@end
    
