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
                    id: 'header',
                    type: VaultsComponentTypes.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_TOP
                },
                {
                    id: 'footer',
                    type: VaultsComponentTypes.BUTTON,
                    position: SCREEN_POSITION.FIXED_BOTTOM
                },
            ],
            dataStore: {
                header: {
                    textValue: 'THIS IS lOGIN SCREEN'
                },
                footer: {
                    buttonText: 'Submit',
                    tapAction: {
                        type: 'ON_SUBMIT'
                    },
                    buttonTypeToken: ButtonTypeToken.PRIMARY_BIG
                },
            }
        }
    },

    actionMap: {
        ON_SUBMIT: clickHandler
    }
}

export default LoginScreen;