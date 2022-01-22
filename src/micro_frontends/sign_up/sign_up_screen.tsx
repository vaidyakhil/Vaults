import { ButtonTypeToken, KeyboardType, VaultsComponentTypes } from '../../component_schema';
import { ActionUtilities, BaseScreen, SCREEN_POSITION } from '../../infra_schema';
import { ROUTES } from '../../routes';

const clickHandler = (data: any, utilities: ActionUtilities) => {
    console.log('\n --- \n');
    console.log('CLICK HANDLER GETTING CALLED FROM SIGN UP');
    console.log('\n --- \n');    
    utilities.navigationModule.push({ route: ROUTES.LOGIN_SCREEN, initData: { source: ROUTES.SIGN_UP_SCREEN } });
}

const onTextChangeListener = (data: { _textValue: string }, utilities: ActionUtilities) => {
    console.log('\n --- \n');
    console.log('TEXT: ', data._textValue);
    console.log('\n --- \n');    
}

const SignUpScreen: BaseScreen = {
    getScreenData: (initData: any) => {
        return {
            layout: [
                {
                    id: 'header',
                    type: VaultsComponentTypes.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_TOP
                },
                {
                    id: 'nameInputTextField',
                    type: VaultsComponentTypes.INPUT_TEXT_FIELD,
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
                    },
                    buttonTypeToken: ButtonTypeToken.PRIMARY_BIG
                },
                nameInputTextField: {
                    textValue: 'My Name',
                    placeHolderValue: 'Please enter your name',
                    onTextChangeAction: {
                        type: 'ON_NAME_CHANGE',
                        data: {}
                    },
                    keyboardType: KeyboardType.NUMERIC
                }
            }
        }
    },

    actionMap: {
        ON_SUBMIT: clickHandler,
        ON_NAME_CHANGE: onTextChangeListener,
    }
}

export default SignUpScreen;