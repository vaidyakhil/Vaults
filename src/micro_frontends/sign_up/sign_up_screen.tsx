import { ButtonTypeToken, VaultsComponentTypes } from '../../component_schema';
import { ActionUtilities, BaseScreen, SCREEN_POSITION } from '../../infra_schema';
import { ROUTES } from '../../routes';

const clickHandler = (data: any, utilities: ActionUtilities) => {
    console.log('\n --- \n');
    console.log('CLICK HANDLER GETTING CALLED FROM SIGN UP');
    console.log('\n --- \n');    
    utilities.navigationModule.push({ route: ROUTES.LOGIN_SCREEN, initData: { source: ROUTES.SIGN_UP_SCREEN } });
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
                    id: 'listItem1',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem12',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem13',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem14',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem15',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem16',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem17',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem18',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem19',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem2',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem22',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem23',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem24',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem25',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem26',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem27',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem28',
                    type: VaultsComponentTypes.TEXT_CARD,
                },
                {
                    id: 'listItem29',
                    type: VaultsComponentTypes.TEXT_CARD,
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
                listItem1: {
                    textValue: 'text no. listItem1',
                },
                listItem12: {
                    textValue: 'text no. listItem12',
                },
                listItem13: {
                    textValue: 'text no. listItem13',
                },
                listItem14: {
                    textValue: 'text no. listItem14',
                },
                listItem15: {
                    textValue: 'text no. listItem15',
                },
                listItem16: {
                    textValue: 'text no. listItem16',
                },
                listItem17: {
                    textValue: 'text no. listItem17',
                },
                listItem18: {
                    textValue: 'text no. listItem18',
                },
                listItem19: {
                    textValue: 'text no. listItem19',
                },
                listItem2: {
                    textValue: 'text no. listItem2',
                },
                listItem22: {
                    textValue: 'text no. listItem22',
                },
                listItem23: {
                    textValue: 'text no. listItem23',
                },
                listItem24: {
                    textValue: 'text no. listItem24',
                },
                listItem25: {
                    textValue: 'text no. listItem25',
                },
                listItem26: {
                    textValue: 'text no. listItem26',
                },
                listItem27: {
                    textValue: 'text no. listItem27',
                },
                listItem28: {
                    textValue: 'text no. listItem28',
                },
                listItem29: {
                    textValue: 'text no. listItem29',
                },
            }
        }
    },

    actionMap: {
        ON_SUBMIT: clickHandler
    }
}

export default SignUpScreen;