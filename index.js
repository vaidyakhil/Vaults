import React from 'react';
import { AppRegistry } from 'react-native';
import { components } from './src'

let App = () => {
  const { TextCard } = components;
  return (
    <TextCard textValue={"Welcome to React Native Realm!!"}/>
  );
}

AppRegistry.registerComponent("Vaults", () => App);
