import { BaseScreen, ScreenStructure } from "../../infra";

const LoginScreen: BaseScreen = {
    
    getScreenData: function (initData: any): ScreenStructure {
        return {
            layout: [],
            dataStore: {}
        }
    },

    actionMap: {
    }
}

export default LoginScreen;