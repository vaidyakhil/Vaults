import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenRouteData } from '..';
import VaultsScreen from './VaultsScreen';


const Stack = createNativeStackNavigator();

const ScreensContainer: React.FunctionComponent<ScreenRouteData> = (props) => {
  console.log('\n--- ---- ---\n');
  console.log('props in ScreensContainer', props);
  console.log('\n--- ---- ---\n');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VaultsScreen">
        <Stack.Screen name="VaultsScreen" component={VaultsScreen} initialParams={props} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreensContainer;