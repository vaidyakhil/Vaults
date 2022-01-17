import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    hello: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: '#000000'
    }
});

const WelComeCard: React.FunctionComponent<{ text: string }> = ({
    text
}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>{text}</Text>
      </View>
    );
  }
  
  export default WelComeCard;