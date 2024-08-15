import React from 'react';
import { Modal, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Car } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    cars: Car[];
}

export const ModalCard = ({ isVisible, setShowModal, cars }: Props) => {

    // Función para calcular el total a pagar
    const totalPay = (): number => {
        return cars.reduce((acc, product) => acc + product.price * product.quantity, 0);
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType='fade'
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Mis Productos</Text>
                
                    <FlatList
                        data={cars}
                        renderItem={({ item }) => (
                            <View style={styles.headerTable}>
                                <Text style={styles.headerTableText}>{item.name}</Text>
                                <View style={styles.headerTableInf}>
                                    <View style={styles.cellContainer}>
                                        <Text style={styles.cellText}>{item.price.toFixed(2)}</Text>
                                        <Text style={styles.cellLabel}>Precio</Text>
                                    </View>
                                    <View style={styles.cellContainer}>
                                        <Text style={styles.cellText}>{item.quantity}</Text>
                                        <Text style={styles.cellLabel}>Cant.</Text>
                                    </View>
                                    <View style={styles.cellContainer}>
                                        <Text style={styles.cellText}>{(item.price * item.quantity).toFixed(2)}</Text>
                                        <Text style={styles.cellLabel}>Total</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                    <Text style={styles.totalText}>Total a Pagar: ${totalPay().toFixed(2)}</Text>
                    <Text style={styles.modalCloseText} onPress={setShowModal}>Cerrar</Text>
                </View>
            </View>
        </Modal>
    );
}


