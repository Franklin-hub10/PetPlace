import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, FlatList, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import { RootStackParams } from '../navigator/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../appTheme/AppTheme';

// Definimos el tipo de datos para una mascota
interface PetData {
  nombresMascota: string;
  imageUri: string | null;
}

// Definimos el tipo de datos para un producto
interface ProductDes {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [userName, setUserName] = useState('');
  const [pets, setPets] = useState<PetData[]>([]); // Definimos el tipo de `pets` como un array de `PetData`

  const [promotions, setPromotions] = useState<string[]>([
    'Promoción 1', 'Promoción 2', 'Promoción 3', 'Promoción 4', 'Promoción 5',
    'Promoción 6', 'Promoción 7', 'Promoción 8', 'Promoción 9', 'Promoción 10',
    'Promoción 11', 'Promoción 12', 'Promoción 13', 'Promoción 14', 'Promoción 15',
    'Promoción 16', 'Promoción 17', 'Promoción 18', 'Promoción 19', 'Promoción 20',
  ]);

  const productsDes: ProductDes[] = [
    { id: 1, name: 'Royal Canine', price: 1.50, stock: 10, pathImage: 'https://citypet.ec/wp-content/uploads/2020/04/Alimento-para-perros-Royal-Canin-Mini-Puppy.jpg' },
    { id: 2, name: 'Juguete', price: 1.50, stock: 0, pathImage: 'https://wongfood.vtexassets.com/arquivos/ids/516957-1600-auto?v=637789953726470000&width=1600&height=auto&aspect=true' },
    { id: 3, name: 'Pro Plan', price: 2.50, stock: 3, pathImage: 'https://purina.com.ec/sites/default/files/styles/simple_card/public/2022-08/puppy_pro_plan.png.webp?itok=-SLLVvPs' },
    { id: 4, name: 'Pro Plan +', price: 2.00, stock: 4, pathImage: 'https://purina.com.ec/sites/default/files/styles/simple_card/public/2022-08/puppy_pro_plan.png.webp?itok=-SLLVvPs' },
    { id: 5, name: 'Golosina', price: 2.75, stock: 15, pathImage: 'https://purina.com.ec/sites/default/files/styles/simple_card/public/2022-08/reduced_calorie_pro_plan.png.webp?itok=m9aQv_1M' },
    { id: 6, name: 'ssss', price: 3.00, stock: 15, pathImage: 'https://s.libertaddigital.com/2022/02/13/snacks-para-perros-arquivet-twist-con-pollo-enrollado.jpg' },
    { id: 7, name: 'Bull Stick', price: 2.00, stock: 10, pathImage: 'https://farmaenlace.vtexassets.com/arquivos/ids/163099-800-auto?v=638083710702630000&width=800&height=auto&aspect=true' },
    { id: 8, name: 'Juguete', price: 1.50, stock: 18, pathImage: 'https://kywiec.vtexassets.com/arquivos/ids/195841-800-auto?v=638476050379170000&width=800&height=auto&aspect=true' },
    { id: 9, name: 'Ollie', price: 1.50, stock: 15, pathImage: 'https://m.media-amazon.com/images/I/711dB6ysBoL._AC_UF1000,1000_QL80_.jpg' },
    { id: 10, name: 'Lollies', price: 1.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4AFtvY_b8bHZhgeGBdOjhq2caRvvMuEfEA&s' },
  
  ];  

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

   // Cargar datos de usuario y mascotas cada vez que la pantalla está activa
   useFocusEffect(
    React.useCallback(() => {
      const loadData = async () => {
        try {
          const userData = await AsyncStorage.getItem('userData');
          const petsData = await AsyncStorage.getItem('petsData');

          if (userData) {
            const { nombres } = JSON.parse(userData);
            setUserName(nombres);
          }

          if (petsData) {
            setPets(JSON.parse(petsData) as PetData[]);
          } else {
            setPets([]);
          }
        } catch (error) {
          console.error('Error cargando datos:', error);
        }
      };

      loadData();
    }, []) 
  );

  return (
    <View style={styles.fondoHome}>
      <ImageBackground
        source={require('../../assets/logo_1.png')}
        style={styles.backgroundImageMenu}
        resizeMode="cover"

      />
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
          {productsDes.map((product) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => navigation.navigate('Menu')}
              style={styles.promotionBox}
            >
              {/* Imagen del producto */}
              <Image source={{ uri: product.pathImage }} style={styles.promotionImage} />

              {/* Nombre del producto */}
              <Text style={styles.promotionText}>{product.name}</Text>

              {/* Precio con descuento */}
              <Text style={styles.promotionPrice}>${(product.price * 0.9).toFixed(2)}</Text>

              {/* Etiqueta de descuento */}
              <View style={styles.discountBadge}>
                <Text style={styles.discountBadgeText}>10% OFF</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

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
    </View>
  );
};

export default Home;
