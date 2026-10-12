# Android APK

This project includes a Capacitor Android app with package ID `com.jyotiverma.portfolio`. The app opens the deployed portfolio at `https://my-portfolio-t7ht.vercel.app`, so it needs an internet connection and displays the currently deployed website.

## Build a debug APK on Windows

1. Install Android Studio and its Android SDK, then open this project in Android Studio.
2. In a terminal at the project root, run `npm install` and `npm run android:sync`.
3. Run `npm run android:open` to open the native project, or open the `android` folder directly in Android Studio.
4. In Android Studio, wait for Gradle sync, then choose **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
5. Android Studio will show the APK path when the build finishes. The command line equivalent is `npm run android:apk`; the debug APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.

For a release APK suitable for distribution, use **Build > Generate Signed Bundle / APK** in Android Studio and create a signing key. Keep that key private and backed up.

## Download an APK from GitHub Actions

Pushing this project to `main` starts the **Build Android APK** workflow. When it completes, open the workflow run in the repository's **Actions** tab and download the `jyoti-portfolio-debug-apk` artifact. The APK is a debug build for direct installation and is not a Play Store release build.
