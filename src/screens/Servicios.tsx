import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../appTheme/AppTheme';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../navigator/StackNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';




const Servicios = () => {
 
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.containerRegistro}>
     
      <View style={styles.containerDatos}>
        {/* Aquí puedes agregar otros contenidos si es necesario */}
      </View>
      <View style={styles.iconContainer}>
        {/* Los íconos ahora tienen lógica de navegación */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Servicios')}>
          <Ionicons name="briefcase" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Tienda')}>
          <Ionicons name="storefront" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MiPerfil')}>
          <Ionicons name="person" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
      );
}

 


export default Servicios;
