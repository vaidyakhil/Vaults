import { VaultsComponentTypes } from '../component_schema';

export type NavigationModule = {
    push: (screenRouteData: ScreenRouteData) => void;
    pop: () => void;
}

export type DataStoreManipulationModule = {
    setInDataStore: (changes: object) => object;
    getFromDataStore: (path: string) => any;
}

export type KeyValueStoreModule = {
    getString: (key: string, fileName?: string) => Promise<string>
    getBoolean: (key: string, fileName?: string) => Promise<boolean>
    getInt: (key: string, fileName?: string) => Promise<number>

    setString: (key: string, value: string, fileName?: string) => Promise<boolean>
    setBoolean: (key: string, value: boolean, fileName?: string) => Promise<boolean>
    setInt: (key: string, value: number, fileName?: string) => Promise<boolean>
}

export enum SCREEN_POSITION {
    FIXED_TOP = 'FIXED_TOP',
    FIXED_BOTTOM = 'FIXED_BOTTOM'
}

export type LayoutElement = {
    id: string;
    type: VaultsComponentTypes;
    position?: SCREEN_POSITION;
}

export type ScreenStructure = {
    layout: LayoutElement[],
    dataStore: object
}

export type ActionUtilities = {
    navigationModule: NavigationModule;
    dataStoreManipulationModule: DataStoreManipulationModule,
    keyValueStoreModule: KeyValueStoreModule;
}

export type ActionFn = (data: any, utilities: ActionUtilities) => void;

export type BaseScreen = {
    getScreenData: (initData: any) => ScreenStructure;
    actionMap?: { [key in string]: ActionFn }
}

export type ScreenRouteData = {
    route: string, 
    initData: any;
}

export type BaseRouteMap = { [key in string]: BaseScreen };