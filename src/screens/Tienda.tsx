import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../navigator/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../appTheme/AppTheme';

// Definimos el tipo de datos para una mascota
interface PetData {
  nombresMascota: string;
  imageUri: string | null;
}

const Tienda = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [userName, setUserName] = useState('');
  const [pets, setPets] = useState<PetData[]>([]); // Definimos el tipo de `pets` como un array de `PetData`

  const [promotions, setPromotions] = useState<string[]>([
    'Promoción 1', 'Promoción 2', 'Promoción 3', 'Promoción 4', 'Promoción 5',
    'Promoción 6', 'Promoción 7', 'Promoción 8', 'Promoción 9', 'Promoción 10',
    'Promoción 11', 'Promoción 12', 'Promoción 13', 'Promoción 14', 'Promoción 15',
    'Promoción 16', 'Promoción 17', 'Promoción 18', 'Promoción 19', 'Promoción 20',
  ]);

  // Función para guardar una nueva mascota
  const savePetData = async (newPetData: PetData) => {
    try {
      const existingPets = await AsyncStorage.getItem('petsData');
      const petsArray = existingPets ? JSON.parse(existingPets) : [];
      petsArray.push(newPetData);
      await AsyncStorage.setItem('petsData', JSON.stringify(petsArray));
      console.log('Mascota guardada correctamente.');
    } catch (error) {
      console.error('Error al guardar la mascota:', error);
    }
  };

  // Cargar datos del usuario y mascotas
  useEffect(() => {
    const loadData = async () => {
      const userData = await AsyncStorage.getItem('userData');
      const petsData = await AsyncStorage.getItem('petsData');

      if (userData) {
        const { nombres } = JSON.parse(userData);
        setUserName(nombres);
      }

      if (petsData) {
        setPets(JSON.parse(petsData) as PetData[]);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.fondoHome}>
      {/* Barra superior */}
      <View style={styles.topBar}>
        <Text style={styles.welcomeText}>Bienvenido, {userName}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notificaciones')}>
          <Ionicons name="notifications" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Información de las mascotas */}
      <View style={styles.petInfoContainer}>
        <FlatList
          data={pets}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.petCard}>
              <Text style={styles.petName}>{item.nombresMascota}</Text>
              <View style={styles.petImageContainer}>
                {item.imageUri ? (
                  <Image source={{ uri: item.imageUri }} style={styles.petImage} />
                ) : (
                  <View style={styles.petImagePlaceholder}>
                    <Text style={styles.petImagePlaceholderText}>No Image</Text>
                  </View>
                )}
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistroMascotas')}
          style={styles.addPetButton}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Recuadros de promociones */}
      <View style={styles.promoContainer}>
        <Text style={styles.promotionsTitle}>Promociones</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionsContainer}>
          {promotions.map((promo, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Tienda')}
              style={styles.promotionBox}
            >
              <Text style={styles.promotionText}>{promo}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Menú inferior */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Servicios')}>
          <Ionicons name="briefcase" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="storefront" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MiPerfil')}>
          <Ionicons name="person" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tienda;
