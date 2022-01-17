package com.vaidyakhil.vaults

import android.app.Application
import com.facebook.react.*
import com.facebook.soloader.SoLoader

class MainApplication: Application(), ReactApplication {
    companion object {
        fun getReactNativeAppName(): String = "Vaults"
    }

    private val JS_MODULE_NAME = "index"
    private val JS_BUNDLE_FILE = "assets://index.android.bundle"

    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // packages.add(new MyReactNativePackage());
            return PackageList(this).packages
        }

        override fun getJSMainModuleName(): String {
            return JS_MODULE_NAME
        }

        override fun getJSBundleFile(): String? {
            return JS_BUNDLE_FILE
        }
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }
}