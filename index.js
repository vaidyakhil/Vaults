import React from 'react';
import { AppRegistry } from 'react-native';
import TextCard from './src/TextCard'

let App = () => {
  return (
    <TextCard textValue={"Welcome to React Native Realm!!"}/>
  );
}

AppRegistry.registerComponent("Vaults", () => App);
