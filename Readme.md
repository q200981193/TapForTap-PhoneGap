# Tap for Tap PhoneGap Plugins

Want to use Tap for Tap with PhoneGap? We got you covered on Android and iOS.

## Installation
If you don't have the plugins yet then head over to the [downloads page](https://github.com/betastreet/TapForTap-PhoneGap/downloads) and
get yourself a zip file.

Installing the Tap for Tap plugin is super easy. We'll guide you through it.
This isn't a PhoneGap tutorial so we assume that you have a PhoneGap project
(or projects) already set up and working.

These instructions are for recent versions of PhoneGap, i.e. v1.5.0 and up. If
you're using something older and the plugins don't work let us know and we'll
see what we can do for you.

### Android
1. [Download our Android SDK](http://developer.tapfortap.com/sdk) and find
the file `TapForTap.jar` included therein. You'll need this file in the next
step.

2. Peek inside the `Android` folder and put `TapForTapPlugin.jar` in your
project's `libs` folder, alongside `phonegap-1.x.x.jar` or `cordova-1.x.x.jar`.
Put `TapForTap.jar` from step 1 to your `libs` folder as well.

3. Now add the JAR files to your project by following [Step 1 of our SDK instructions](http://developer.tapfortap.com/sdk). Basically you just right-click the JAR files and choose "Add to Build Path".

4. Now go ahead and put `tapfortap.js` in `assets/www` alongside
`phonegap-1.x.x.js` or `cordova-1.x.x.js`.

5. Open `res/xml/plugins.xml` and add this line:

```
<plugin name="TapForTap" value="com.tapfortap.phonegap.TapForTapPlugin"/>
```

That's it! Unless you're integrating Tap for Tap into an iOS app as well you
can skip down to **Usage**.

### iOS
1. [Download our iOS SDK](http://developer.tapfortap.com/sdk) and find the
folder `TapForTap` included therein. Add it to your project by following
step 1 of the iOS instructions on the SDK download page.

2. Add `TapForTapPhoneGapPlugin.h` and `TapForTapPhoneGapPlugin.m` to your
project in the `Plugins` folder provided by PhoneGap.

3. Put `tapfortap.js` in your `www` folder, alongside `phonegap-1.x.x.js`
or `cordova-1.x.x.js`.

4. Under `Supporting Files` open `PhoneGap.plist` or `Cordova.plist` and
to the `Plugins` dictionary add the key `TapForTap` with value
`TapForTapPhoneGapPlugin`. Also add the following 2 items to the
`ExternalHosts` array: `api.tapfortap.com` and `developer.tapfortap.com`.

That's it! Now you're ready to use Tap for Tap in your app.

## Usage
First up include the Tap for Tap JavaScript module, this goes directly after
the similar line that includes `phonegap/cordova-1.x.x.js`:

    <script type="text/javascript" charset="utf-8" src="tapfortap.js"></script>

Second, and lastly, create an ad view and tell it to load ads, like so:

```
document.addEventListener('deviceready', function() {

  var appId = '<YOUR APP ID>';
  TapForTap.checkIn(appId);
  TapForTap.createAdView({ appId: appId }, function() {
    TapForTap.loadAds(function() {
      // successfully loaded ads
    }, function(e) {
      console.error('error loading ads: ', e);
    });
  }, function(e) {
    console.error('error creating ad view: ', e);
  });

}, false);
```

Congratulations, you are done. We said it was easy!

## API Documentation
The JavaScript API lets you create, position, and remove Tap for Tap ad views. You
can also pass in optional info about your users to help us with targetting. Please
make sure your privacy policy allows this before giving us their personal information.

#### setDefaultAppId(appId)
Use this method to set your app ID once when your app launches. All other
API calls will use this app ID.

Usage:

    TapForTap.setDefaultAppId('my-app-id');

#### checkIn([appId])
All of your apps should check in once at startup. This lets us know when Tap for Tap
has been successfully integrated into an app and in the future will allow us to track
installs.

The `appId` parameter is not required if you set a default app ID.

Usage:

    TapForTap.checkIn();

or

    TapForTap.checkIn('my-app-id');

#### createAdView([options])
Create and display an ad view.

The options object itself is optional, and supports these optional properties:

  * **appId**:  specifies the app ID.
  * **x**: the x coordinate of the origin of the ad (only supported on iOS)
  * **y**: the y coordinate of the origin of the ad (only supported on iOS)
  * **gender**: the user's gender, `'male'` or `'female'`
  * **age**: an integer specifying the user's age
  * **location**: an object with `latitude` and `longitude` properties

Usage:

```
// Create an ad using the default app ID
TapForTap.createAdView();

// Create an ad using an explicit app ID
TapForTap.createAdView({ appId: 'my-app-id' });

// Create an ad at the top of the screen (only supported on iOS)
TapForTap.createAdView({ y: 0 });

// Pass in optional info about the user
TapForTap.createAdView({
  gender: 'female',
  age: 21,
  location: { latitude: '123.4567890', longitude: '45.67890' }
});
```

#### loadAds()
Loads and displays Tap for Tap ads. Call this once after creating the ad view.

Usage:

    TapForTap.loadAds();

#### moveAdView([options])
This animates the ad view to a new location on screen. `options` is optional
and can contain the following properties:

  * **x**: the x coordinate of the origin of the ad (only supported on iOS)
  * **y**: the y coordinate of the origin of the ad (only supported on iOS)

Usage:

    // Move the ad to the top of the screen (only supported on iOS)
    TapForTap.moveAdView({ y: 0 });

#### removeAdView()
Removes the ad view from the screen and stops loading ads.

Usage:

    TapForTap.removeAdView();

## Support
Things don't always go according to plan. If you hit a snag somewhere and need a
hand don't hesitate to get in touch with us at
[support@tapfortap.com](mailto:support@tapfortap.com) or on Twitter where we go
by the swanky handle [@tapfortap](https://twitter.com/tapfortap).

## License

Licensed under the terms of the MIT License.

Copyright &copy; 2012 Tap for Tap
