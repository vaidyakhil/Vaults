import { VaultsComponentTypes } from "../../component_schema";
import { ROUTES } from "../../config";
import { ActionUtilities, BaseScreen, SCREEN_POSITION } from "../../infra_schema";

const clickHandler = (data: any, utilities: ActionUtilities) => {
    console.log('\n --- \n');
    console.log('CLICK HANDLER GETTING CALLED FROM SIGN UP');
    console.log('\n --- \n');    
    utilities.navigationModule.push({ route: ROUTES.LOGIN_SCREEN, initData: { source: ROUTES.SIGN_UP_SCREEN } });
}

const SignUpScreen: BaseScreen = {
    getScreenData: (initData: any) => {
        console.log('\n --- \n');
        console.log('getScreenData GETTING CALLED IN SIGN UP WITH INIT DATA: ', initData);
        console.log('\n --- \n');
        
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