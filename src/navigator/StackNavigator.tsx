import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portada from '../screens/Portada';
import Registro from '../screens/Registro';
import { Menu } from '../screens/Menu';


export interface RootStackParams {
  Inicio: undefined;
  Registro: undefined;
  Menu:undefined;
  [key: string]: undefined; 
}

const Stack = createStackNavigator<RootStackParams>();

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




