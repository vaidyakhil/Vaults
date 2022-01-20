import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextCardProps } from "../../component_schema";

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


const TextCard: React.FunctionComponent<TextCardProps> = ({ textValue }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.hello}>{textValue}</Text>
        </View>
    );
}

export default TextCard;