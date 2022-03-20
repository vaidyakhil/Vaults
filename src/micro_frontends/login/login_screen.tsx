import { ButtonTypeToken, VaultsComponentTypes } from '../../component_schema';
import { ActionUtilities, BaseScreen, SCREEN_POSITION } from '../../infra_schema';

const clickHandler = async (data: any, utilities: ActionUtilities) => {
    const oldToken = await utilities.keyValueStoreModule.setBoolean("isUserLoggedIn", false);
}

const LoginScreen: BaseScreen = {
    getScreenData: (initData: any) => {
        return {
            layout: [
                {
                    id: 'toastStack',
                    type: VaultsComponentTypes.TOAST_STACK
                },
            ],
            dataStore: {
                toastStack: {},
            }
        }
    },

    actionMap: {
        ON_SUBMIT: clickHandler
    }
}

export default LoginScreen;