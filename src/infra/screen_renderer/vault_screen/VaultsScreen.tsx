import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { filter as _filter, difference as _difference, map as _map } from 'lodash-es';
import { ActionUtilities, LayoutElement, ScreenRouteData, SCREEN_POSITION } from '../../../infra_schema';
import { ActionData } from '../../../component_schema';
import { PropsComponentMap } from '../../../components';
import HeaderComponent from './header_component';
import FooterComponent from './footer_component';
import NavigationModuleImpl from '../../modules/navigation_module';
import ExternalDependencies from '../../external_dependencies';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

const getUtilitiesObject = ({ navigation }: { navigation: any }): ActionUtilities => {
    return {
        navigationModule: NavigationModuleImpl(navigation)
    }
}

const VaultsScreen: React.FunctionComponent<{ route: { params: ScreenRouteData}; navigation: any }> = ({ route: { params }, navigation}) => {  
    
    const { route, initData } = params;
    const screen = ExternalDependencies._routeMap[route];
    const { layout, dataStore } = screen.getScreenData(initData);

    const handleAction = (actionData: ActionData) => {
        const actionMap = screen.actionMap;
        const utilities = getUtilitiesObject({ navigation });
        if (actionMap && actionData.type && actionMap[actionData.type]) {
            actionMap[actionData.type](actionData.data, utilities);
        }
    }
    
    const headerItems = _filter(layout, { position: SCREEN_POSITION.FIXED_TOP });
    const footerItems = _filter(layout, { position: SCREEN_POSITION.FIXED_BOTTOM });
    const listItems = _difference(layout, [...headerItems, ...footerItems]);


    const renderItem = ({ item }: { item: LayoutElement, index?: number }) => {
        const itemComponentProps = dataStore[item.id];
        const ItemComponent = PropsComponentMap[item.type]
        return (
            <ItemComponent {...itemComponentProps} handleAction={handleAction} key={item.id} />
        )
    }

    const headerChildren = headerItems ? _map(headerItems, (item: LayoutElement) => {
        return renderItem({ item });
    }) : null;

    const headerElement = headerItems ? <HeaderComponent>{headerChildren}</HeaderComponent> : null;

    const footerChildren = footerItems ? _map(footerItems, (item: LayoutElement) => {
        return renderItem({ item });
    }) : null;

    const footerElement = footerItems ? <FooterComponent>{footerChildren}</FooterComponent> : null;

    return (
        <SafeAreaView style={styles.container}>
            {
                headerItems ?
                    <HeaderComponent>
                        {headerElement}
                    </HeaderComponent>
                    : null
            }
            <FlatList
                data={listItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> 
            {
                footerItems ?
                    <FooterComponent>
                        {footerElement}
                    </FooterComponent>
                    : null
            }
        </SafeAreaView>
    );
};

export default VaultsScreen;