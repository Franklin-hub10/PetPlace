import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portada from '../screens/Portada';
import Registro from '../screens/Registro';
import { Menu } from '../screens/Menu';
import { StyleSheet } from 'react-native';

export interface RootStackParams {
  Inicio: undefined;
  Registro: undefined;
  Menu:undefined;
  [key: string]: undefined; 
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio" >
      <Stack.Screen name="Inicio" component={Portada}  />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
 
});


