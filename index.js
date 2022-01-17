import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

var styles = StyleSheet.create({
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

HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>WELCOME</Text>
    </View>
  );
}

AppRegistry.registerComponent("Vaults", () => HelloWorld);
