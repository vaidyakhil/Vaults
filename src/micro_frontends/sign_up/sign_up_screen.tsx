import { Components } from "../../component_schema";
import { BaseScreen, ScreenStructure, SCREEN_POSITION } from "../../infra_schema";

const SignUpScreen: BaseScreen = {
    
    getScreenData: function (initData: any): ScreenStructure {
        return {
            layout: [
                {
                    id: 'header1',
                    type: Components.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_TOP
                },
                {
                    id: 'header2',
                    type: Components.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_TOP
                },
                {
                    id: 'listItem1',
                    type: Components.TEXT_CARD,
                },
                {
                    id: 'listItem2',
                    type: Components.TEXT_CARD,
                },
                {
                    id: 'listItem3',
                    type: Components.TEXT_CARD,
                },
                {
                    id: 'listItem4',
                    type: Components.TEXT_CARD,
                },
                {
                    id: 'listItem5',
                    type: Components.TEXT_CARD,
                },
                {
                    id: 'footer1',
                    type: Components.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_BOTTOM
                },
                {
                    id: 'footer2',
                    type: Components.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_BOTTOM
                },
                {
                    id: 'footer3',
                    type: Components.TEXT_CARD,
                    position: SCREEN_POSITION.FIXED_BOTTOM
                },
            ],
            dataStore: {
                header1: {
                    textValue: 'this is header1'
                },
                header2: {
                    textValue: 'this is header2'
                },

                listItem1: {
                    textValue: 'this is listItem1'
                },
                listItem2: {
                    textValue: 'this is listItem2'
                },
                listItem3: {
                    textValue: 'this is listItem3'
                },
                listItem4: {
                    textValue: 'this is listItem4'
                },
                listItem5: {
                    textValue: 'this is listItem5'
                },

                footer1: {
                    textValue: 'this is footer1'
                },
                footer2: {
                    textValue: 'this is footer2'
                },
                footer3: {
                    textValue: 'this is footer3'
                },
            }
        }
    },

    actionMap: {
    }
}

export default SignUpScreen;