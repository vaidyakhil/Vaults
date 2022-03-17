import { map as _map } from 'lodash-es';
import { ButtonTypeToken, VaultsComponentTypes } from '../../component_schema';
import { ActionUtilities, BaseScreen, SCREEN_POSITION, LayoutElement } from '../../infra_schema';
import getDocuments from './documents';

const clickHandler = async (data: any, utilities: ActionUtilities) => {
}

const ListingScreen: BaseScreen = {
    getScreenData: (initData: any) => {
        const data = getDocuments();
        const layout: LayoutElement[] = [];
        const dataStore = {};
        data.forEach((document, index) => {
            layout.push({
                id : "document_" + index.toString(),
                type: VaultsComponentTypes.DOCUMENT_CARD,
            });

            dataStore["document_" + index.toString()] = {
                titleText: document.title,
                content: document.content,
                tags: _map(document.tags, (tag) => ({
                    text: tag,
                    id: tag,
                }))
            }
        })
        return {
            layout,
            dataStore
        }
    },

    actionMap: {
        ON_SUBMIT: clickHandler
    }
}

export default ListingScreen;