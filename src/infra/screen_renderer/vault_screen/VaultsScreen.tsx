import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { filter as _filter, difference as _difference, map as _map } from 'lodash-es';
import { LayoutElement, ScreenRouteData, SCREEN_POSITION } from "../../../infra_schema";
import PropsComponentMap from "../../../components/props_component_map";
import RoutesMap from "../../../config/route_map";  
import HeaderComponent from "./header_component";
import FooterComponent from "./footer_component";
import { ActionData } from "../../../components/types";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

const VaultsScreen: React.FunctionComponent<{ route: { params: ScreenRouteData} }> = ({ route: { params}}) => {  
    const { route, initData } = params;
    const screen = RoutesMap[route];
    const { layout, dataStore } = screen.getScreenData(initData);

    const handleAction = (actionData: ActionData) => {
        const actionMap = screen.actionMap;
        if (actionMap && actionData.type && actionMap[actionData.type]) {
            actionMap[actionData.type](actionData.data);
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
}

export default VaultsScreen;