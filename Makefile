all: android ios

android:
	ant -buildfile Android/TapForTapPhoneGapPlugin/plugin.xml
	cp Android/TapForTapPhoneGapPlugin/out/artifacts/TapForTapPlugin_jar/TapForTapPlugin.jar Android/
	cp Android/TapForTapPhoneGapPlugin/assets/www/tapfortap.js Android/

ios:
	cp iOS/TapForTapPhoneGapPlugin/TapForTapPhoneGapPlugin/TapForTapPhoneGapPlugin.[hm] iOS
	cp iOS/TapForTapPhoneGapPlugin/www/tapfortap.js iOS

.PHONY: android ios
