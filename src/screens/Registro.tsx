import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../appTheme/AppTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigator/StackNavigator';



interface Props {
  placeholder: string;
  handleSetValues: (name: string, value: string) => void;   //prop función
  name: string;
  isPassword?: boolean;  //prop opcional
  hasIcon?: boolean;
  actionIcon?: () => void;  //prop función
}





const Registro = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombres, setNombres] = useState('');
  const [numeroCelular, setNumeroCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  // Función para manejar el registro y guardar los datos

  //borrar el contenido de la contrase;a y el email
  useEffect(() => {
    setEmail('');
    setPassword('');
    setNombres ('');
    setNumeroCelular ('');
    setDireccion ('');
  }, [navigation]);





  const handleRegister = async () => {
    if (!email || !password || !nombres || !numeroCelular || !direccion) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const userData = {
      email,
      password,
      nombres,
      numeroCelular,
      direccion
    };

    try {
    
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      

      Alert.alert('Registro Exitoso', `Bienvenido, ${nombres}`);
      console.log(userData)
      console.log('Navegando a Portada'); 
      navigation.navigate('Inicio');

    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al guardar los datos');
      console.error(error);
    }
  };

  return (
    <View style={styles.containerRegistro}>
            <ImageBackground
        source={require('../../assets/logo_registro_1.png')}
        style={styles.backgroundImageRegistro}
       // resizeMode="cover"
      ></ImageBackground>
      <View
      style={styles.containerDatos}>
      <Text style={styles.titleRegistro}>Registro</Text>

  
      <TextInput
        style={styles.input}
        placeholder="Nombres y apellidos"
        placeholderTextColor="#aaa"
        onChangeText={setNombres}
        value={nombres}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Celular"
        placeholderTextColor="#aaa"
        onChangeText={setNumeroCelular}
        value={numeroCelular}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        placeholderTextColor="#aaa"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />
            <TextInput
        style={styles.input}
        placeholder="Dirección"
        placeholderTextColor="#aaa"
        onChangeText={setDireccion}
       value={direccion}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.buttonRegistro} onPress={handleRegister}>
        <Text style={styles.buttonTextRegistro}>Registrarse</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

 


export default Registro;
