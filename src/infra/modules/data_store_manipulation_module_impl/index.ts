import { get as _get, set as _set  } from 'lodash-es';
import { DataStoreManipulationModule } from "../../../infra_schema"

/*
**  Not sure if this is the right way to implement this feature
*/
const DataStoreManipulationModuleImpl = (dataStore: object, setDataStore: (updatedDataStore: any) => any): DataStoreManipulationModule => {
    return {
        setInDataStore: (changes: object) => {
            console.log('DataStoreManipulationModuleImpl: ', changes);
            
            const updatedDataStore = { ...dataStore };
            for (const key in changes) {
                _set(updatedDataStore, key, changes[key])
            }
            setDataStore(updatedDataStore);
            return updatedDataStore;
        },
        getFromDataStore: (path: string) => {
            return _get(dataStore, path);
        }
    }
};

export { DataStoreManipulationModuleImpl };