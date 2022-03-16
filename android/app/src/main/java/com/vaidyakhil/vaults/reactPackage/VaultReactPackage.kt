package com.vaidyakhil.vaults.reactPackage

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import com.vaidyakhil.vaults.reactPackage.nativeModules.KeyValueStoreModule

class VaultReactPackage: ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf<NativeModule>().apply {
            add(KeyValueStoreModule(reactContext))
        }
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return ArrayList()
    }
}