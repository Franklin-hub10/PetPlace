  import { StyleSheet } from "react-native";



  export const styles = StyleSheet.create({

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
    logo: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginContainer: {
      width: '80%',
      padding: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 10,
    },
    title: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input1: {
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: '#000',
    },
    button: {
      backgroundColor: '#ff6347',
      paddingVertical: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    registerText: {
      color: 'white',
      fontSize: 16,
      marginTop: 20,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },

    containerRegistro: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    titleRegistro: {
      color: '#333',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },

    input: {
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      width: '100%',
      color: '#000',
    },
    buttonRegistro: {
      backgroundColor: '#ff6347',
      paddingVertical: 15,
      borderRadius: 10,
      width: '100%',
    },
    buttonTextRegistro: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    backgroundImageRegistro: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },


    //iconos


    passwordContainer: {
      flexDirection: 'row',   // Alinea el TextInput y el Icon horizontalmente
      alignItems: 'center',   // Alinea el contenido verticalmente al centro
      borderColor: '#aaa',

      // paddingRight: 10,       // Espacio para que el ícono no esté pegado al borde

    },

    IconoPosision: {
      position: 'absolute',
      right: 10,              // Coloca el ícono 10 unidades desde la derecha
      justifyContent: 'center',
      color: '#000',
      bottom: 0.1

      // marginBottom:20       
    },

    modalContainer: {



    },

    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    headerTable: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    headerTableText: {
      fontSize: 16,
      fontWeight: '600',
    },
    headerTableInf: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    cellContainer: {
      alignItems: 'center',
      marginHorizontal: 5,
    },
    cellText: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    cellLabel: {
      fontSize: 12,
      color: '#888',
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
    },
    modalCloseText: {
      fontSize: 16,
      color: '#007BFF',
      marginTop: 20,
      textAlign: 'center',
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contentPrincipal: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    contentModal: {
      width: '100%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },

    closeIcon: {
      padding: 5,
    },
    modalBody: {
      alignItems: 'center',
    },
    imagenCard: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    modalText: {
      fontSize: 16,
      marginBottom: 10,
    },
    controlsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    quantityButton: {
      backgroundColor: '#DDD',
      padding: 10,
      borderRadius: 5,
    },
    quantityText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    buyButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buyButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },

    contentCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },

    textContainer: {
      flex: 1,
    },
    titleCard: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    priceCard: {
      fontSize: 16,
      color: '#888',
    },


    headerModal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    titleModal: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    iconCard: {
      padding: 5,
    },

    textHeaderInf: {
      fontSize: 16,
      fontWeight: '600',
    },

    textTotalPay: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    buttonAddCard: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    textButtonAddCard: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },

    imageCard: {

    },

    imageModal: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    messageStock: {
      fontSize: 16,
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    contentQuantity: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonQuantity: {
      backgroundColor: '#DDD',
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    textButtonQuantity: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    textQuantity: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000',
    },


    contentHeaderHome: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: '#f5f5f5',
    },

    textIconCar: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
      marginRight: 8,
    },

    //body

    contentBody: {

    },
    //titulos

    globalTitle: {
      color: 'blue',
      fontSize: 27,
      paddingHorizontal: 30,
      paddingVertical: 30,
      fontWeight: 'bold'

    },
    containerMenu: {
      flex: 1,
    },
    backgroundImageMenu: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },

    containerMenuF: {
      backgroundColor: 'gray',
    },

    posicionF:{
      backgroundColor: 'blue',
      borderRadius: 100,
      paddingHorizontal: 5,
      fontSize: 14,
      fontWeight: 'bold'
    },

    containerMenu: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    },
    backgroundImageMenu: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.1,  // Esto hace que la imagen de fondo sea más sutil
    },
    containerMenuF: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },

    titleText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    productContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 5,
    },
    productText: {
      fontSize: 16,
      color: '#333',
    },
    productPrice: {
      fontSize: 16,
      color: '#666',
    },
    addToCartButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#007bff',
      borderRadius: 5,
    },
    addToCartButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    cartModal: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      marginTop: 50,
    },
    cartItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    cartItemText: {
      fontSize: 16,
      color: '#333',
    },
    cartItemPrice: {
      fontSize: 16,
      color: '#007bff',
    },
    closeButton: {
      alignSelf: 'flex-end',
      padding: 10,
      backgroundColor: '#ff4444',
      borderRadius: 5,
    },
    closeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });