import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BaseRouteMap, ScreenRouteData } from '../../infra_schema';
import { VaultsScreen } from './vault_screen';
import { VAULTS_SCREEN } from '../types';
import ExternalDependencies from '../external_dependencies';



const Stack = createNativeStackNavigator();

const ScreensContainer: React.FunctionComponent<{ screeeData: ScreenRouteData; _routeMap: BaseRouteMap }> = ({ screeeData, _routeMap }) => {
  
  /*
  **  Not sure if this is the right pattern to initialize dependencies that infra module have on the client
  */
  if (ExternalDependencies._routeMap == undefined) {
    ExternalDependencies._routeMap = _routeMap;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={VAULTS_SCREEN} >
        <Stack.Screen name={VAULTS_SCREEN} component={VaultsScreen} initialParams={screeeData} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreensContainer;