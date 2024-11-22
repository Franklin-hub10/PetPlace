import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert, Modal, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParams } from '../navigator/StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../appTheme/AppTheme';

interface PetData {
  nombresMascota: string;
  edad: { anios: string; meses: string };
  raza: string;
  peso: string;
  colorP: string;
  descripcionMascota: string;
}

const MiPerfil = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [userData, setUserData] = useState<any>(null);
  const [pets, setPets] = useState<PetData[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPet, setCurrentPet] = useState<PetData | null>(null);

  // Cargar datos del usuario y las mascotas
  useEffect(() => {
    const loadData = async () => {
      const user = await AsyncStorage.getItem('userData');
      const petsData = await AsyncStorage.getItem('petsData');
      if (user) setUserData(JSON.parse(user));
      if (petsData) setPets(JSON.parse(petsData));
    };

    loadData();
  }, []);

  // Guardar cambios en los datos del usuario
  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Actualización exitosa', 'Los datos del usuario han sido actualizados.');
      setIsEditing(false);
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
    }
  };

  // Guardar cambios en los datos de las mascotas
  const savePetData = async () => {
    try {
      const updatedPets = pets.map((pet) =>
        pet.nombresMascota === currentPet?.nombresMascota ? currentPet : pet
      );
      await AsyncStorage.setItem('petsData', JSON.stringify(updatedPets));
      setPets(updatedPets);
      Alert.alert('Actualización exitosa', 'Los datos de la mascota han sido actualizados.');
      setModalVisible(false);
    } catch (error) {
      console.error('Error al actualizar los datos de la mascota:', error);
    }
  };

  // Eliminar mascota
  const deletePet = async (petName: string) => {
    try {
      const updatedPets = pets.filter((pet) => pet.nombresMascota !== petName);
      await AsyncStorage.setItem('petsData', JSON.stringify(updatedPets));
      setPets(updatedPets);
      Alert.alert('Eliminación exitosa', `La mascota ${petName} ha sido eliminada.`);
    } catch (error) {
      console.error('Error al eliminar la mascota:', error);
    }
  };

  return (
    <ScrollView style={styles.fondoHome}>
      <Text style={styles.title}>Perfil</Text>

      {/* Datos del Usuario */}
      <View style={styles.containerDatos}>
        <Text style={styles.titleRegistro}>Datos del Usuario</Text>
        {userData && (
          <>
            <TextInput
              style={styles.input}
              value={userData.nombres}
              editable={isEditing}
              onChangeText={(text) => setUserData({ ...userData, nombres: text })}
              placeholder="Nombres y Apellidos"
            />
            <TextInput
              style={styles.input}
              value={userData.numeroCelular}
              editable={isEditing}
              onChangeText={(text) => setUserData({ ...userData, numeroCelular: text })}
              placeholder="Número de Celular"
            />
            <TextInput
              style={styles.input}
              value={userData.email}
              editable={isEditing}
              onChangeText={(text) => setUserData({ ...userData, email: text })}
              placeholder="Correo Electrónico"
            />
            <TextInput
              style={styles.input}
              value={userData.direccion}
              editable={isEditing}
              onChangeText={(text) => setUserData({ ...userData, direccion: text })}
              placeholder="Dirección"
            />
          </>
        )}
        <TouchableOpacity style={styles.buttonRegistro} onPress={() => (isEditing ? saveUserData() : setIsEditing(true))}>
          <Text style={styles.buttonTextRegistro}>{isEditing ? 'Guardar Cambios' : 'Editar Datos'}</Text>
        </TouchableOpacity>
      </View>

{/* Datos de las Mascotas */}
<View>
  <Text style={styles.mascotasTitulo}>Mascotas Registradas</Text>
  <FlatList
  data={pets}
  keyExtractor={(item) => item.nombresMascota}
  numColumns={2} // Mostrar dos columnas
  renderItem={({ item }) => (
    <View style={styles.mascotaCard}>
      <Text style={styles.mascotaNombre}>{item.nombresMascota}</Text>
      <Text style={styles.mascotaDetalle}>Raza: {item.raza}</Text>
      <Text style={styles.mascotaDetalle}>
        Edad: {item.edad.anios} años y {item.edad.meses} meses
      </Text>
      <Text style={styles.mascotaDetalle}>Peso: {item.peso}</Text>
      <Text style={styles.mascotaDetalle}>Color: {item.colorP}</Text>
      <Text style={styles.mascotaDetalle}>Descripción: {item.descripcionMascota}</Text>
      <View style={styles.mascotaBotonesContainer}>
        <TouchableOpacity
          style={styles.mascotaBotonEditar}
          onPress={() => {
            setCurrentPet(item);
            setModalVisible(true);
          }}
        >
          <Text style={styles.mascotaBotonTexto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mascotaBotonEliminar}
          onPress={() => deletePet(item.nombresMascota)}
        >
          <Text style={styles.mascotaBotonTexto}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
/>

</View>


      {/* Modal para editar información de la mascota */}
      {currentPet && (
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.containerDatosM}>
            <Text style={styles.titleRegistro}>Editar Mascota</Text>
            <TextInput
              style={styles.input}
              value={currentPet.nombresMascota}
              onChangeText={(text) => setCurrentPet({ ...currentPet, nombresMascota: text })}
              placeholder="Nombres"
            />
            <TextInput
              style={styles.input}
              value={currentPet.raza}
              onChangeText={(text) => setCurrentPet({ ...currentPet, raza: text })}
              placeholder="Raza"
            />
            <TextInput
              style={styles.input}
              value={currentPet.edad.anios}
              onChangeText={(text) =>
                setCurrentPet({ ...currentPet, edad: { ...currentPet.edad, anios: text } })
              }
              placeholder="Años"
            />
            <TextInput
              style={styles.input}
              value={currentPet.edad.meses}
              onChangeText={(text) =>
                setCurrentPet({ ...currentPet, edad: { ...currentPet.edad, meses: text } })
              }
              placeholder="Meses"
            />
            <TextInput
              style={styles.input}
              value={currentPet.peso}
              onChangeText={(text) => setCurrentPet({ ...currentPet, peso: text })}
              placeholder="Peso"
            />
            <TextInput
              style={styles.input}
              value={currentPet.descripcionMascota}
              onChangeText={(text) => setCurrentPet({ ...currentPet, descripcionMascota: text })}
              placeholder="Descripción"
            />
            <TouchableOpacity style={styles.buttonRegistro} onPress={savePetData}>
              <Text style={styles.buttonTextRegistro}>Guardar Cambios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegistro} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonTextRegistro}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      {/* Menú inferior */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegistroMascotas')}>
          <Ionicons name="briefcase" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="storefront" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MiPerfil')}>
          <Ionicons name="person" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MiPerfil;
