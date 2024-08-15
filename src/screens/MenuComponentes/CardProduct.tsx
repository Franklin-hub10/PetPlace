import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../Menu';
import { styles } from '../../appTheme/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProducto';

interface Props {
  product: Product;
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const CardProduct = ({ product, changeStockProduct }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.contentCard}>
        <Image
          source={{ uri: product.pathImage || 'https://via.placeholder.com/150' }}
          style={styles.imageCard}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.titleCard}>{product.name}</Text>
          <Text>Precio: ${product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.iconCard}>
          <Icon
            name='add-shopping-cart'
            size={33}
            color={'#ff6347'}
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </View>
      <ModalProduct
        isVisible={showModal}
        setShowModal={() => setShowModal(!showModal)}
        product={product}
        changeStockProduct={changeStockProduct}
      />
    </View>
  );
}
