package com.vaidyakhil.vaults.reactPackage.nativeModules

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.vaidyakhil.vaults.plugins.PreferenceFile

class KeyValueStoreModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return ReactNativeModules.KeyValueStoreModule.name
    }

    private fun getSharedPrefs(fileName: String?): SharedPreferences {
        val prefFile = PreferenceFile.values().find {
            it.name == fileName
        } ?: PreferenceFile.DEFAULT
        return reactContext.getSharedPreferences(prefFile.name, Context.MODE_PRIVATE)
    }

    @ReactMethod
    fun getString(key: String, fileName: String? = null, promise: Promise) {
        val sharedPrefs: SharedPreferences = getSharedPrefs(fileName)
        if (sharedPrefs.contains(key) && sharedPrefs.getString(key, null) != null) {
            promise.resolve(sharedPrefs.getString(key, null))
            return
        }
        promise.reject(Exception("NOT_FOUND"))
    }

    @ReactMethod
    fun getBoolean(key: String, fileName: String? = null, promise: Promise) {
        val sharedPrefs: SharedPreferences = getSharedPrefs(fileName)
        if (sharedPrefs.contains(key)) {
            promise.resolve(sharedPrefs.getBoolean(key, false))
            return
        }
        promise.reject(Exception("NOT_FOUND"))
    }

    @ReactMethod
    fun getInt(key: String, fileName: String? = null, promise: Promise) {
        val sharedPrefs: SharedPreferences = getSharedPrefs(fileName)
        if (sharedPrefs.contains(key)) {
            promise.resolve(sharedPrefs.getInt(key, 0))
            return
        }
        promise.reject(Exception("NOT_FOUND"))
    }

    @ReactMethod
    fun setString(key: String, value: String, fileName: String? = null, promise: Promise) {
        try {
            getSharedPrefs(fileName)
                .edit()
                .putString(key, value)
                .apply()
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject(Exception(e.message))
        }
    }

    @ReactMethod
    fun setBoolean(key: String, value: Boolean, fileName: String? = null, promise: Promise) {
        try {
            getSharedPrefs(fileName)
                .edit()
                .putBoolean(key, value)
                .apply()
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject(Exception(e.message))
        }
    }

    @ReactMethod
    fun setInt(key: String, value: Int, fileName: String? = null, promise: Promise) {
        try {
            getSharedPrefs(fileName)
                .edit()
                .putInt(key, value)
                .apply()
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject(Exception(e.message))
        }
    }
}
