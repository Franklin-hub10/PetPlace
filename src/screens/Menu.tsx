import React, { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ModalCar } from './MenuComponentes/ModalCard';
import { CardProduct } from './MenuComponentes/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TitleComponent } from '../componentReutilizables/TitleComponent';
import { BodyComponent } from '../componentReutilizables/BodyComponent';
import { styles } from '../appTheme/AppTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/StackNavigator';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}


export interface Car {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
  pathImage: string;
}

const products: Product[] = [
  { id: 1, name: 'ss', price: 1.50, stock: 10, pathImage: 'https://jotajotafoods.com/wp-content/uploads/2022/05/CER00015.jpg' },
  { id: 2, name: 'ss', price: 1.50, stock: 0, pathImage: 'https://www.aki.com.ec/retornables/wp-content/uploads/2023/04/club335.jpg' },
  { id: 3, name: 'ss', price: 2.50, stock: 3, pathImage: 'https://static.vecteezy.com/system/resources/previews/037/751/355/non_2x/corona-extra-beer-bottle-isolated-on-a-transparent-background-free-png.png' },
  { id: 4, name: 'ss', price: 2.00, stock: 4, pathImage: 'https://w7.pngwing.com/pngs/82/1/png-transparent-ale-low-alcohol-beer-budweiser-anheuser-busch-inbev-beer-food-beer-bottle-beer.png' },
  { id: 5, name: 'sss', price: 2.75, stock: 15, pathImage: 'https://w7.pngwing.com/pngs/203/575/png-transparent-beer-bottle-free-buckle-material-green-heineken-thumbnail.png' },
  { id: 6, name: 'ssss', price: 3.00, stock: 15, pathImage: 'https://c0.klipartz.com/pngpicture/545/817/gratis-png-pringles-original-lata-pringles-original-pequena-caja-thumbnail.png' },
  { id: 7, name: 'sssss', price: 2.00, stock: 10, pathImage: 'https://farmaenlace.vtexassets.com/arquivos/ids/163099-800-auto?v=638083710702630000&width=800&height=auto&aspect=true' },
  { id: 8, name: 'sssss', price: 1.50, stock: 18, pathImage: 'https://e7.pngegg.com/pngimages/342/103/png-clipart-cheetos-crunchy-party-size-plastic-pack-cheetos-cheese-puffs-snack-frito-lay-cheetos-crunchy-pack-food-cheese-thumbnail.png' },
  { id: 9, name: 'ssssssss', price: 1.50, stock: 15, pathImage: 'https://images.rappi.com.ec/products/d64db69e-c179-4fd2-ada4-5e25c8e5c511.png?e=webp&q=80&d=130x130' },
  { id: 10, name: 'Msss', price: 1.00, stock: 10, pathImage: 'https://golozinalujan.com/wp-content/uploads/2023/01/Diseno-sin-titulo-24-4.png' },

];



export const Menu = () => {


  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  //hook useState: manipular el arreglo de productos
  const [productsState, setProductsState] = useState(products);

  //hook useState: manipular el arreglo de carrito de compras
  const [car, setCar] = useState<Car[]>([]);

  //hook useState: manipular la visibilidad del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //función para actualizar la información del arreglo producto
  const changeStockProduct = (idProduct: number, quantity: number) => {
    //Nuevo arreglo con el stock actualizado
    const updateStock = productsState.map(product => product.id === idProduct
      ? { ...product, stock: product.stock - quantity }
      : product);
    //Actualizar productState
    setProductsState(updateStock);

    //llamar función agregar carrito
    addProduct(idProduct, quantity);
  }

  //función agregar los productos al carrito
  const addProduct = (idProduct: number, quantity: number) => {
    const product = productsState.find(product => product.id === idProduct);

    //Controlar si el producto no ha sido encontrado
    if (!product) {
      return;
    }
// Verificar si el producto ya está en el carrito
const existingProductIndex = car.findIndex(item => item.id === idProduct);

if (existingProductIndex >= 0) {
    // Si el producto ya existe, actualizar la cantidad
    const updatedCar = [...car];
    updatedCar[existingProductIndex].totalQuantity += quantity;
    setCar(updatedCar);
} else {
    // Si el producto no existe, agregarlo al carrito

    //Si el producto fue encontrado - genero objeto car|producto
    const newProductCar: Car = {
      id: product.id,
      name: product.name,
      price: product.price,
      pathImage: product.pathImage,
      totalQuantity: quantity
    };

    //Agregar en el arreglo del carrito de compras
    setCar([...car, newProductCar]);
    //console.log(car);
  }
}


  return (
    <View style={styles.containerMenu}>
      <ImageBackground
        source={require('../../assets/logo_1.png')}
        style={styles.backgroundImageMenu}
        resizeMode="cover"

      />
      <View style={styles.containerMenuF} >
        <TitleComponent title='Productos' />
        {car.length > 0 && (
  <View>
    <Text style={styles.numCar}>{car.length}</Text>
    <Icon
      style={styles.posicionF}
      name="shopping-cart"
      size={50}
      color={'#ff6347'}
      onPress={() => setShowModal(!showModal)}
    />
  </View>
)}

</View>
      <BodyComponent>
        <FlatList
          data={productsState}
          renderItem={({ item }) => (
            <View style={{ flex: 1, margin: 8 }}>
              <CardProduct product={item} changeStockProduct={changeStockProduct} />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2} // Esto permite mostrar 2 productos por fila
        />

      </BodyComponent>
      <ModalCar
        isVisible={showModal}
        car={car}
        setShowModal={() => setShowModal(!showModal)}
        setCar={() => setCar([])}
        />

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



