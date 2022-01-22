import { VaultsComponentTypes } from "../../component_schema";
import { BaseScreen, SCREEN_POSITION } from "../../infra_schema";

const clickHandler = (data: any) => {
    console.log('\n --- \n');
    console.log('CLICK HANDLER GETTING CALLED FROM LOGIN');
    console.log('\n --- \n');    
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
                    }
                },
            }
        }
    },

    actionMap: {
        ON_SUBMIT: clickHandler
    }
}

export default LoginScreen;