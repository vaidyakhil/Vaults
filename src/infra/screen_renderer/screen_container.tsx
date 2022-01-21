import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenRouteData } from '../../infra_schema';
import { VaultsScreen } from './vault_screen';
import { VAULTS_SCREEN } from '../types';



const Stack = createNativeStackNavigator();

const ScreensContainer: React.FunctionComponent<ScreenRouteData> = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={VAULTS_SCREEN}>
        <Stack.Screen name={VAULTS_SCREEN} component={VaultsScreen} initialParams={props} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreensContainer;