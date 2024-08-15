import React from 'react';
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Car } from '../Menu';
import { styles } from '../../appTheme/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';



//interface - props
interface Props {
    isVisible: boolean;
    setShowModal: () => void; //función para cerrar el modal
    car: Car[];  //arreglo con la lista de productos en el carrito
    setCar: () => void;
}

export const ModalCar = ({ isVisible, setShowModal, car,setCar }: Props) => {

    const { width } = useWindowDimensions();

    //función para calcular el total a pagar
    const totalPay = (): number => {
        //acumulador
        let total: number = 0;
        car.forEach(product => {
            total += product.price * product.totalQuantity
        });
        return total;
    }

    //función enviar la compra
    const handleSendInfo = () => {
Alert.alert(  "Gracias por tu compra",
    "Tu producto llegará pronto.")
        //vaciar el carrito
        setCar();
        //Cerrar el modal
        setShowModal();
    }

    return (
        <Modal visible={isVisible} transparent={true} animationType='fade'>
            <View style={styles.contentPrincipalP}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModalP}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.iconCard}>
                            <Icon
                                name='cancel'
                                size={27}
                                color={'#FB6F0F'}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.headerTable}>
                        <Text style={styles.textHeaderInf}>Producto</Text>
                        <View style={styles.headerTableInf}>
                            <Text style={{
                                ...styles.textHeaderInf,
                                marginHorizontal: 10,
                                left: 25,
                            }}>Prec.</Text>
                            <Text style={{
                                ...styles.textHeaderInf,
                                marginHorizontal: 10,
                                left: 10,
                            }}>Cant.</Text>
                            <Text style={{
                                ...styles.textHeaderInf,
                                marginHorizontal: 10,

                            }}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={car}
                        renderItem={({ item }) =>
                            <View style={styles.itemContainer}>
                                <Image
                                    source={{ uri: item.pathImage }}
                                    style={styles.imageItem}
                                />
                                <Text style={styles.itemText}>{item.name}</Text>
                                <View style={styles.headerTableInf}>
                                    <Text style={styles.itemText}>
                                        $ {item.price.toFixed(2)}
                                    </Text>
                                    <Text style={styles.itemText}>
                                        {item.totalQuantity}
                                    </Text>
                                    <Text style={styles.itemText}>$
                                        {(item.price * item.totalQuantity).toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.textTotalPay}>
                            Total pagar: ${totalPay().toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={handleSendInfo}
                        style={styles.buttonAddCard}>
                        <Text style={styles.textButtonAddCard}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}