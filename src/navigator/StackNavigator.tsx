import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portada from '../screens/Portada';
import Registro from '../screens/Registro';
import { Menu } from '../screens/Menu';
import RegistroMascotas from '../screens/RegistroMascotas';
import Home from '../screens/Home';
import Servicios from '../screens/Servicios';
import Tienda from '../screens/Tienda';
import MiPerfil from '../screens/MiPerfil';

export interface RootStackParams {
  Inicio: undefined;
  Registro: undefined;
  Menu: undefined;
  Tabs: undefined;
  Home: undefined;
  Servicios: undefined;
  Tienda: undefined;
  MiPerfil: undefined;
  [key: string]: undefined; 
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 1,
        },
      }}
    >
      <Stack.Screen name="Inicio" component={Portada} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="RegistroMascotas" component={RegistroMascotas} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Servicios" component={Servicios} />
      <Stack.Screen name="Tienda" component={Tienda} />
      <Stack.Screen name="MiPerfil" component={MiPerfil} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
