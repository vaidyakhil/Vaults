import { get as _get } from 'lodash-es'
import { KeyValueStoreModule } from '../../../infra_schema';
import NativeModules from '../native_modules'

const NativeKeyValueStoreModule = _get(NativeModules, 'KeyValueStoreModule');

const KeyValueStoreModuleImpl: KeyValueStoreModule = {
    getString: async (key: string, fileName?: string) => {
        if (NativeKeyValueStoreModule && NativeKeyValueStoreModule.getString) {
            return NativeKeyValueStoreModule.getString(key, fileName);
        }
        console.log( "Local Storage Module NOT FOUND");
        return Promise.reject({});
   },

   getBoolean: async (key: string, fileName?: string) => {
        if (NativeKeyValueStoreModule && NativeKeyValueStoreModule.getBoolean) {
            return NativeKeyValueStoreModule.getBoolean(key, fileName);
        }
        console.log( "Local Storage Module NOT FOUND");
        return Promise.reject({});
    },

    getInt: async (key: string, fileName?: string) => {
        if (NativeKeyValueStoreModule && NativeKeyValueStoreModule.getInt) {
            return NativeKeyValueStoreModule.getInt(key, fileName);
        }
        console.log( "Local Storage Module NOT FOUND");
        return Promise.reject({});
    },

    setString: async (key: string, value: string, fileName?: string) => {
        if (NativeKeyValueStoreModule && NativeKeyValueStoreModule.setString) {
            return NativeKeyValueStoreModule.setString(key, value, fileName);
        }
        console.log( "Local Storage Module NOT FOUND");
        return Promise.reject({});
   },

   setBoolean: async (key: string, value: boolean, fileName?: string) => {
        if (NativeKeyValueStoreModule && NativeKeyValueStoreModule.setBoolean) {
            return NativeKeyValueStoreModule.setBoolean(key, value, fileName);
        }
        console.log( "Local Storage Module NOT FOUND");
        return Promise.reject({});
    },

    setInt: async (key: string, value: number, fileName?: string) => {
        if (NativeKeyValueStoreModule && NativeKeyValueStoreModule.setInt) {
            return NativeKeyValueStoreModule.setInt(key, value, fileName);
        }
        console.log( "Local Storage Module NOT FOUND");
        return Promise.reject({});
    },
}

export { KeyValueStoreModuleImpl };