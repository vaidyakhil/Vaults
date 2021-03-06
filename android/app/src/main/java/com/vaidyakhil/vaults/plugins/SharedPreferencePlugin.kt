package com.vaidyakhil.vaults.plugins

import android.content.Context
import android.content.SharedPreferences
import com.vaidyakhil.vaults.AppConstants

enum class PreferenceFile(name: String) {
    DEFAULT(AppConstants.DEFAULT_PREFERENCE_FILE)
}

class SharedPreferencePlugin (file: PreferenceFile, context: Context) {
    private val sharedPrefs: SharedPreferences = context.applicationContext.getSharedPreferences(file.name, Context.MODE_PRIVATE)

    fun getBoolean(key: String, defaultValue: Boolean = false): Boolean {
        if (sharedPrefs.contains(key)) {
            return sharedPrefs.getBoolean(key, false)
        }
        return defaultValue
    }

    fun getInt(key: String, defaultValue: Int = 0): Int {
        if (sharedPrefs.contains(key)) {
            return sharedPrefs.getInt(key, 0)
        }
        return defaultValue
    }

    fun getString(key: String, defaultValue: String = ""): String {
        return sharedPrefs.getString(key, defaultValue) ?: defaultValue
    }
}