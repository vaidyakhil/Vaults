import { RouteGroupConfig } from "@react-navigation/native";
import { ROUTES } from "../../config/routes";

export enum SCREEN_POSITION {
    FIXED_TOP = 'FIXED_TOP',
    FIXED_BOTTOM = 'FIXED_BOTTOM'
}

export type LayoutElement = {
    id: string;
    type: string;
    position?: SCREEN_POSITION;
}

export type ScreenStructure = {
    layout: LayoutElement[],
    dataStore: object
}

export type ActionFn = (data: any) => void;

export type BaseScreen = {
    loadPage: (initData: any) => ScreenStructure;
    actionMap?: { [key in string]: ActionFn }
}

export type ScreenRouteData = {
    route: ROUTES, 
    initData: any;
}

export type NavigationModule = {
    push: (screenRouteData: ScreenRouteData) => void;
    pop: () => void;
}

