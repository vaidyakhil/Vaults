import React from 'react';
import { View } from 'react-native';

const FooterComponent: React.FunctionComponent<any> = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    )
}

export default FooterComponent;