package com.vaidyakhil.vaults

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.vaidyakhil.vaults.utility.PreferenceFile
import com.vaidyakhil.vaults.utility.SharedPreferenceManager

class ReactNativeActivity : ReactActivity() {

    companion object {
        const val IS_USER_LOGGED_IN = "isUserLoggedIn"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }

    override fun getMainComponentName(): String? {
        return MainApplication.getReactNativeAppName()
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate = object: ReactActivityDelegate(this, MainApplication.getReactNativeAppName()) {
        override fun getLaunchOptions(): Bundle? {
            return getApplicationInitialProps()
        }
    }

    private fun getApplicationInitialProps(): Bundle {
        val sharedPrefs = SharedPreferenceManager(PreferenceFile.DEFAULT, this)
        return Bundle().apply {
            putBoolean(IS_USER_LOGGED_IN, sharedPrefs.getBoolean(IS_USER_LOGGED_IN))
        }
    }

}