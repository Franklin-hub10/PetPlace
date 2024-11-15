import React, { useState } from 'react';
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../appTheme/AppTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';


const MiPerfil = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [nombresMascota, setNombresMascota] = useState('');
  const [edadAnios, setEdadAnios] = useState('');
  const [edadMeses, setEdadMeses] = useState('');
  const [raza, setRaza] = useState('');
  const [peso, setPeso] = useState('');
  const [unidadPeso, setUnidadPeso] = useState('kg');
  const [descripcionMascota, setDescripcionMascota] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleRegister = async () => {
    if (!nombresMascota || (!edadAnios && !edadMeses) || !raza || !peso || !descripcionMascota) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const userDataMascota = {
      nombresMascota,
      edad: { anios: edadAnios, meses: edadMeses },
      raza,
      peso: `${peso} ${unidadPeso}`,
      descripcionMascota,
      imageUri,  // Guardar la URI de la imagen
    };

    try {
      await AsyncStorage.setItem('userDataMascota', JSON.stringify(userDataMascota));
      
      Alert.alert('Registro Exitoso', `${nombresMascota} ha sido registrado exitosamente.`);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al guardar los datos');
      console.error(error);
    }
  };

  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.7,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('El usuario canceló la selección de imagen');
      } else if (response.errorCode) {
        console.log('Error al seleccionar imagen:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setImageUri(uri || null);  // Actualizar la URI de la imagen
      }
    });
  };

  return (
    <View style={styles.containerRegistro}>
      <ImageBackground
        source={require('../../assets/logo_registro_1.png')}
        style={styles.backgroundImageRegistro}
      ></ImageBackground>
    <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" style={styles.icon}  />
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
};

export default MiPerfil;
