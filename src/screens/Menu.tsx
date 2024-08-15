import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
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

export interface Car {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const Menu = () => {
  // Hook para actualizar el estado de los productos
  const [productsState, setProductsState] = useState(products);
  // Hook para capturar la lista de productos seleccionados
  const [cars, setCars] = useState<Car[]>([]);
  // Hook para gestionar el modal del carrito
  const [showModal, setShowModal] = useState(false);

  // Función para controlar el stock
  const handlerChangeStockProduct = (idProducto: number, quantity: number) => {
    const updateStock = productsState.map(item => 
      item.id === idProducto
        ? {
            ...item,
            stock: item.stock - quantity,
          }
        : item
    );
    setProductsState(updateStock);
    // Llamar a la función añadir carrito
    addProduct(idProducto, quantity);
  };

  // Función para agregar en el carrito de compras
  const addProduct = (idProduct: number, quantity: number) => {
    const product = productsState.find(item => item.id === idProduct);

    // Si no existe el producto
    if (!product) {
      return;
    }

    // Si existe el producto
    const newCar: Car = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    };
    // Añadir al carrito
    setCars(prevCars => [...prevCars, newCar]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/startup_screen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
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

