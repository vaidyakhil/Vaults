import React from "react";
import { AppRegistry } from "react-native";
import Elements from './src'

let { WelcomeCard } = Elements.components;
App = () => {
  return (
    <WelcomeCard text={"WELCOME"}/>
  );
}

AppRegistry.registerComponent("Vaults", () => App);
