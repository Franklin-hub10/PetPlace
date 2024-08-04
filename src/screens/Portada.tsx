import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Parametro } from '../navigator/StackNavigator';

const Portada = () => {
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<Parametro>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // Limpia el temporizador 
    return () => clearTimeout(timer);
  }, []);

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
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerText: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default Portada;
