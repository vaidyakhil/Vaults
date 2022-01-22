import React from 'react';
import { View } from 'react-native';

const HeaderComponent: React.FunctionComponent<any> = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    )
}

export default HeaderComponent;