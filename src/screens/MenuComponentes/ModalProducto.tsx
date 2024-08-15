import React, { useState } from 'react'
import { Text, View, Modal, Alert, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Product} from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { PRIMARY_COLOR } from '../../../commons/constantsColor';

//interface - props

interface Props {
  isVisible: boolean;
  product: Product;
  setShowModal: () => void; //funciona para visibilidad o no del modal
  changeStockProduct: (idProduct: number, quantity: number) => void   
}
export const ModalProducto = ({ isVisible, setShowModal, product,  changeStockProduct}: Props) => {
  //hook useWindosdimension : tama;o de la pantalla
  const { width } = useWindowDimensions();

  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeQuantity = (value: number) => {
    if (quantity + value >= 1) {
      setQuantity(quantity + value);
    }
  };
  
    

  const handleAddProduct = () => {
    //actualizar el stock
  changeStockProduct(product.id,quantity);

  // actualizar el modal
  setQuantity(1);

  //cerrar modal 
  setShowModal();

  };
  const totalPrice = product.price * quantity;
  return (
    <Modal animationType="slide"
  
    transparent={true}
    visible={isVisible}
  >
    <View style={styles.overlay}>
      <View style={[styles.contentPrincipal, { width: width * 0.80 }]}>
        <View style={styles.contentModal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{product.name}</Text>
            <Icon
              name="close"
              size={25}
              color={PRIMARY_COLOR}
              style={styles.closeIcon}
              onPress={setShowModal}
            />
          </View>
          <View style={styles.modalBody}>
            <Image
              source={{ uri: product.pathImage }}
              style={styles.imagenCard}
            />
            <Text style={styles.modalText}>Precio: ${product.price.toFixed(2)}</Text>
            <Text style={styles.modalText}>Total: ${totalPrice.toFixed(2)}</Text>
            <View style={styles.controlsContainer}>
              {product.stock === 0 ? (
                <Text>Producto Agotado!</Text>
              ) : (
                <>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => handleChangeQuantity(-1)}
                      disabled={quantity === 1}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => handleChangeQuantity(1)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={handleAddProduct} style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Agregar Carrito</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
    </Modal>
  )
}
