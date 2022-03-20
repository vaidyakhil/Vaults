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
                    id: 'moveBall',
                    type: VaultsComponentTypes.MOVE_BALL
                },
            ],
            dataStore: {
                moveBall: {},
            }
        }
    },

    actionMap: {
        ON_SUBMIT: clickHandler
    }
}

export default LoginScreen;