import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../appTheme/AppTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Portada = () => {
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // Limpia el temporizador 
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async () => {
    try {
      // Recuperar los datos almacenados en AsyncStorage
      const storedUserData = await AsyncStorage.getItem('userData');

      if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Validar las credenciales
        if (userData.email === email && userData.password === password) {
          Alert.alert('Acceso exitoso', 'Bienvenido!');
          // Navegar a la pantalla del menú
          navigation.navigate('Menu');
        } else {
          Alert.alert('Error', 'Correo o contraseña incorrectos');
        }
      } else {
        Alert.alert('Error', 'No se encontraron datos de usuario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al verificar los datos');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/startup_screen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {visible ? (
          <ImageBackground
            source={require('../../assets/background_image.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Bienvenido</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.registerText}>¿Eres nuevo? Regístrate aquí</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}



export default Portada;
