import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../commons/constantsColor';
import { ModalProducto } from './ModalProducto';

interface Props {
  product: Product;
  handlerChangeStockProduct: (idProduct: number, quantity: number) => void;
}

const CardProduct = ({ product, handlerChangeStockProduct }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.contentCard}>
        <Image
          source={{ uri: product.pathImage }}
          style={styles.imagenCard}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleCard}>{product.name}</Text>
          <Text style={styles.priceCard}>${product.price.toFixed(2)}</Text>
        </View>
        <View>
          <Icon
            name="shopping-cart-checkout"
            size={40}
            color={PRIMARY_COLOR}
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </View>
      <ModalProducto
        product={product}
        isVisible={showModal}
        setShowModal={() => setShowModal(!showModal)}
        changeStockProduct={handlerChangeStockProduct} // Añadir esta línea
      />
    </View>
  );
}

export default CardProduct;

