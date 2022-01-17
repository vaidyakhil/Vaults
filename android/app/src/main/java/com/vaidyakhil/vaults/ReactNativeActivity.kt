package com.vaidyakhil.vaults

import com.facebook.react.ReactActivity

class ReactNativeActivity : ReactActivity() {
    override fun getMainComponentName(): String? {
        return MainApplication.getReactNativeAppName()
    }
}