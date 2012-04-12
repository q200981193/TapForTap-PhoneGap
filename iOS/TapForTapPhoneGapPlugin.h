//
//  TapForTapPhoneGapPlugin.h
//
//  Created by Sami Samhuri on 04/02/12.
//  Copyright (c) 2012 Beta Street. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>
#import "TapForTap.h"


@interface TapForTapPhoneGapPlugin : CDVPlugin

@property (nonatomic, retain) TapForTapAdView *adView;

- (void) setDefaultAppId: (NSMutableArray *)arguments withDict: (NSMutableDictionary *)options;
- (void) checkIn: (NSMutableArray *)arguments withDict: (NSMutableDictionary *)options;
- (void) createAdView: (NSMutableArray *)arguments withDict: (NSMutableDictionary *)options;
- (void) loadAds: (NSMutableArray *)arguments withDict: (NSMutableDictionary *)options;
- (void) moveAdView: (NSMutableArray *)arguments withDict: (NSMutableDictionary *)options;
- (void) removeAdView: (NSMutableArray *)arguments withDict: (NSMutableDictionary *)options;

@end
