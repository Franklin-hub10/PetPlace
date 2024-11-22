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



