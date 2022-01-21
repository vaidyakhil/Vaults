import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextCardProps } from "../../component_schema";

const styles = StyleSheet.create({  
    container: {
      justifyContent: "center",
      backgroundColor: '#bfbfbf'
    },
    hello: {
      fontSize: 20,
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