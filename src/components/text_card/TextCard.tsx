import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextCardProps } from '../../component_schema';
import { VaultsComponent } from '../types';

const styles = StyleSheet.create({  
    container: {
      justifyContent: 'center',
    },
    hello: {
      fontSize: 20,
      margin: 10,
      color: '#000000',
      textAlign: 'center',
    }
});


const TextCard: VaultsComponent<TextCardProps> = ({ textValue }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.hello}>{textValue}</Text>
        </View>
    );
}

export default TextCard;