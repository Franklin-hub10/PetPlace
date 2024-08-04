import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portada from '../screens/Portada';
import Registro from '../screens/Registro';
 

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Portada">
      <Stack.Screen name="Portada" component={Portada}  />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
};

export default StackNavigator;


