import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../../component_schema/button";
import { VaultComponents } from "../types";

const styles = StyleSheet.create({  
    container: {
      justifyContent: "center",
      backgroundColor: '#6200EE',
      borderRadius: 6,
    },
    buttonText: {
      fontSize: 20,
      margin: 10,
      textAlign: 'center',
      color: '#ffffff'
    }
});


const Button: VaultComponents<ButtonProps> = ({ buttonText, tapAction, handleAction }) => {

    const onClick = () => {
      if (handleAction && tapAction) {
        handleAction(tapAction)
      }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
          <Text
            style={styles.buttonText}
            align
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
    );
}

export default Button;