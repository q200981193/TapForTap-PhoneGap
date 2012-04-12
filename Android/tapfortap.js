// Tap for Tap PhoneGap plugin
// Copyright 2012 Beta Street

!function () {

  var exec = (function() {
    if (typeof Cordova !== 'undefined') {
      return Cordova.exec;
    }
    if (typeof PhoneGap !== 'undefined') {
      return PhoneGap.exec;
    }
    return function() {
      alert('PhoneGap not found');
    }
  }());

  window.TapForTap = {

    setDefaultAppId: function(appId, successCallback, failureCallback) {
      return exec(successCallback, failureCallback, 'TapForTap', 'setDefaultAppId', [appId]);
    }

  , checkIn: function(appId, successCallback, failureCallback) {
      return exec(successCallback, failureCallback, 'TapForTap', 'checkIn', appId ? [appId] : []);
    }

  , createAdView: function(options, successCallback, failureCallback) {
      return exec(successCallback, failureCallback, 'TapForTap', 'createAdView', [options]);
    }

  , loadAds: function(successCallback, failureCallback) {
      return exec(successCallback, failureCallback, 'TapForTap', 'loadAds', []);
    }

  , moveAdView: function(successCallback, failureCallback) {
      return exec(successCallback, failureCallback, 'TapForTap', 'moveAdView', []);
    }

  , removeAdView: function(options, successCallback, failureCallback) {
      return exec(successCallback, failureCallback, 'TapForTap', 'removeAdView', [options]);
    }

  };

}();
