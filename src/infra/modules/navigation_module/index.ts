import { NavigationModule, ScreenRouteData } from "../../../infra_schema";
import { VAULTS_SCREEN } from "../../types";


const NavigationModuleImpl = (navigator: any): NavigationModule => {
    return {
        push: ({ route, initData }: ScreenRouteData) => {
            if (navigator && navigator.push && route) {
                navigator.push(VAULTS_SCREEN, { route, initData })
            }
        },
        pop: () => {
            if (navigator && navigator.pop) {
                navigator.goBack();
            }
        }
    };
}

export default NavigationModuleImpl;