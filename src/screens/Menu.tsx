import React, { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ModalCar } from './MenuComponentes/ModalCard';
import { CardProduct } from './MenuComponentes/CardProduct';
import { Icon } from 'react-native-vector-icons/Icon';
import { TitleComponent } from '../componentReutilizables/TitleComponent';
import { BodyComponent } from '../componentReutilizables/BodyComponent';

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
}

const products: Product[] = [
  { id: 1, name: 'Funda de arroz', price: 0.90, stock: 10, pathImage: 'assets/icon_72.png' },
  { id: 2, name: 'Funda de azucar', price: 1.10, stock: 0, pathImage: '' },
  { id: 3, name: 'Funda de papas', price: 2.50, stock: 3, pathImage: '' },
  { id: 4, name: 'Funda de fideos', price: 1.00, stock: 4, pathImage: '' },
  { id: 5, name: 'Funda de sal', price: 0.65, stock: 15, pathImage: '' },
  { id: 6, name: 'Funda de sal', price: 0.65, stock: 15, pathImage: '' },
  { id: 7, name: 'Funda de sal', price: 0.65, stock: 15, pathImage: '' },
];



export const Menu = () => {
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

    //Si el producto fue encontrado - genero objeto car|producto
    const newProductCar: Car = {
      id: product.id,
      name: product.name,
      price: product.price,
      totalQuantity: quantity
    }

    //Agregar en el arreglo del carrito de compras
    setCar([...car, newProductCar]);
    //console.log(car);
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/startup_screen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />


        <View >
          <TitleComponent title='Productos' />
          <View >
            <Text>{car.length}</Text>
            <Icon
              name='shopping-cart'
              size={33}
              color={'blue'}
              onPress={() => setShowModal(!showModal)} />
          </View>
        </View>
        <BodyComponent>
          <FlatList
            data={productsState}
            renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />}
            keyExtractor={item => item.id.toString()} />
        </BodyComponent>
        <ModalCar
          isVisible={showModal}
          car={car}
          setShowModal={() => setShowModal(!showModal)} />
      </View>



  );
};



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

});

