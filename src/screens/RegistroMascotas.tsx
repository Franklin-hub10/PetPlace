import React, { useState } from 'react';
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View, Image, Modal, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../appTheme/AppTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistroMascotas = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [nombresMascota, setNombresMascota] = useState('');
  const [edadAnios, setEdadAnios] = useState('');
  const [edadMeses, setEdadMeses] = useState('');
  const [raza, setRaza] = useState('');
  const [peso, setPeso] = useState('');
  const [colorP, setColorP] = useState('');
  const [unidadPeso, setUnidadPeso] = useState('kg');
  const [descripcionMascota, setDescripcionMascota] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Lista de imágenes predeterminadas
  const defaultImages = [
    { id: '1', uri: 'https://hospitalveterinariodonostia.com/wp-content/uploads/2021/02/ninos-914x457.png' },
    { id: '2', uri: 'https://labyes.com/wp-content/uploads/2022/05/chihuahua.jpg' },
    { id: '3', uri: 'https://petfly.io/wp-content/uploads/2024/09/perro-en-la-playa-con-requisitos-para-viajara-mexico-scaled-1-1024x683.webp' },
    { id: '4', uri: 'https://cvfaunia.com/wp-content/uploads/2020/12/empleo-2.jpg' },
  ];

  const handleRegister = async () => {
    if (!nombresMascota || (!edadAnios && !edadMeses) || !raza || !peso || !descripcionMascota) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const newPetData = {
      nombresMascota,
      edad: { anios: edadAnios, meses: edadMeses },
      raza,
      peso: `${peso} ${unidadPeso}`,
      colorP,
      descripcionMascota,
      imageUri, // Guardar la URI de la imagen
    };

    try {
      const existingPets = await AsyncStorage.getItem('petsData');
      const petsArray = existingPets ? JSON.parse(existingPets) : [];

      petsArray.push(newPetData);

      await AsyncStorage.setItem('petsData', JSON.stringify(petsArray));

      Alert.alert('Registro Exitoso', `${nombresMascota} ha sido registrado exitosamente.`);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al guardar los datos');
      console.error(error);
    }
  };

  const selectImage = (uri: string) => {
    setImageUri(uri);
    setModalVisible(false);
  };

  return (
    <View style={styles.containerRegistro}>
      <ImageBackground
        source={require('../../assets/logo_registro_1.png')}
        style={styles.backgroundImageRegistro}
      ></ImageBackground>
      <View style={styles.containerDatos}>
        <Text style={styles.titleRegistro}>Registro de Mascota</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombres"
          placeholderTextColor="#aaa"
          onChangeText={setNombresMascota}
          value={nombresMascota}
          autoCapitalize="none"
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 5 }]}
            placeholder="Años"
            placeholderTextColor="#aaa"
            onChangeText={setEdadAnios}
            value={edadAnios}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 5 }]}
            placeholder="Meses"
            placeholderTextColor="#aaa"
            onChangeText={setEdadMeses}
            value={edadMeses}
            keyboardType="numeric"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Raza"
          placeholderTextColor="#aaa"
          onChangeText={setRaza}
          value={raza}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Color"
          placeholderTextColor="#aaa"
          onChangeText={setColorP}
          value={colorP}
          autoCapitalize="none"
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 5 }]}
            placeholder="Peso"
            placeholderTextColor="#aaa"
            onChangeText={setPeso}
            value={peso}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={[
              styles.unitButton,
              { backgroundColor: unidadPeso === 'kg' ? '#FF7C0A' : '#aaa' },
            ]}
            onPress={() => setUnidadPeso('kg')}
          >
            <Text style={{ color: 'white' }}>Kg</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.unitButton,
              { backgroundColor: unidadPeso === 'lb' ? '#FF7C0A' : '#aaa' },
            ]}
            onPress={() => setUnidadPeso('lb')}
          >
            <Text style={{ color: 'white' }}>Lb</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Descripción"
          placeholderTextColor="#aaa"
          onChangeText={setDescripcionMascota}
          value={descripcionMascota}
          autoCapitalize="none"
        />

        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}

        <TouchableOpacity style={styles.buttonRegistro} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonTextRegistro}>Foto de tu mascota</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegistro} onPress={handleRegister}>
          <Text style={styles.buttonTextRegistro}>Registrar Mascota</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={defaultImages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectImage(item.uri)}>
                <Image source={{ uri: item.uri }} style={styles.imageOption} />
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeModalText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default RegistroMascotas;
