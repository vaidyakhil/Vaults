import { Components } from "../../component_schema";
import { BaseScreen, SCREEN_POSITION } from "../../infra_schema";

const clickHandler = (data: any) => {
    console.log('CLICK HANDLER GETTING CALLED FROM SIGN UP');
}

const SignUpScreen: BaseScreen = {
    getScreenData: (initData: any) => {
        return {
            layout: [
                {
                    id: 'header',
                    type: Components.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_TOP
                },
                {
                    id: 'footer',
                    type: Components.BUTTON,
                    position: SCREEN_POSITION.FIXED_BOTTOM
                },
            ],
            dataStore: {
                header: {
                    textValue: 'THIS IS SIGN UP SCREEN'
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

export default SignUpScreen;