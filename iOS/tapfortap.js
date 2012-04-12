// Tap for Tap PhoneGap plugin
// Copyright 2012 Beta Street

!function () {

  var cordova = (function() {
    if (typeof Cordova !== 'undefined') {
      return Cordova;
    }
    if (typeof PhoneGap !== 'undefined') {
      return PhoneGap;
    }
    return {
      exec: function() {
        alert('PhoneGap not found');
      }
    }
  }());

  window.TapForTap = {

    setDefaultAppId: function(appId, successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'TapForTap', 'setDefaultAppId', [appId]);
    }

  , checkIn: function(appId, successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'TapForTap', 'checkIn', appId ? [appId] : []);
    }

  , createAdView: function(options, successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'TapForTap', 'createAdView', [options]);
    }

  , loadAds: function(successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'TapForTap', 'loadAds', []);
    }

  , moveAdView: function(successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'TapForTap', 'moveAdView', []);
    }

  , removeAdView: function(options, successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'TapForTap', 'removeAdView', [options]);
    }

  };

}();
