import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portada from '../screens/Portada';
import Registro from '../screens/Registro';
import { Menu } from '../screens/Menu';

export interface Parametro {
  Inicio: undefined;
  Registro: undefined;
  Menu:undefined
}

const Stack = createStackNavigator<Parametro>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={Portada} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
