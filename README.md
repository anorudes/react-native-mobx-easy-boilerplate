## react-native-mobx-easy-boilerplate

A starter boilerplate for a mobile app using React Native and Mobx.<br />
This boilerplate was create from [react-native-redux-starter-kit](https://github.com/LeoLeBras/react-native-redux-starter-kit)

## Requirements
- [Node](https://nodejs.org) `4.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.2` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or newer on your Android device to test properly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack
- [React Native](https://facebook.github.io/react-native/) for building native apps using react
- [Mobx](https://github.com/mobxjs/mobx) simple, scalable state management
- [Babel](http://babeljs.io/) for ES6+ support
- [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) a router based on new React Native Navigation API

## Make the awesome
Just clone the repo
and start :
```shell
$ git clone https://github.com/LeoLeBras/react-native-redux-starter-kit.git myAwesomeApp
$ cd myAwesomeApp
$ npm i                         # Install Node.js components listed in ./package.json
```

### How to use?
```shell
$ npm start                     # or: node_modules/react-native/packager/packager.sh
```
This will start a lightweight development server.

###### iOS:
Open `App.xcodeproj` in Xcode, build and run the project.

###### Android:
```shell
$ react-native start
$ react-native run-android # adb reverse tcp:8081 tcp:8080
```
Start your emulator or connect your device.

## Debugging
[Access the in-app developer menu](https://facebook.github.io/react-native/docs/debugging.html) and select ``Debug in Chrome``.

#### Show log
```shell
$ npm run log # adb shell "logcat | grep 'ReactNativeJS'"
$ npm run log:full # adb logcat
```

#### Run Reactotron
```shell
$ npm run reactotron
```
See the [Reacotron docs](https://github.com/skellock/reactotron) for more features.

## Create a release build
* Navigate to Product > Scheme > Edit Scheme... in Xcode and change Build Configuration to *Release*.
* Run in terminal :

###### iOS:
```shell
$ npm run build-ios
```
###### Android:
```shell
$ npm run build-android
```

* Open ios/Wino/AppDelegate.m, comment line 34 and uncomment line 44.
* Press "Build and run" and :boom: !

## Issues
If you run into any issues please see the [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) guide for React Native before submitting an issue.

## Thanks

Big thanks [LeoLeBras](https://github.com/LeoLeBras) for [the original react-native + redux boilerplate](https://github.com/LeoLeBras/react-native-redux-starter-kit)

