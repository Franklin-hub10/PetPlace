import { StyleSheet } from 'react-native';


//colores de app 
export const Colors = {
  primary: 'rgba(209, 93, 7,0.9)',  //naranja para fondos
  
  secondary: '#f8f8f8',  // blanco para fondos
  tercer:'FF7C0A', // naranja para botones
};

export const styles = StyleSheet.create({
    // Fondo para la pantalla Home
    fondoHome: {
      flex: 1,
      //backgroundColor:Colors.primary,
    },
     // **Estilos para Portada**
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', // Color naranja
    textAlign:'justify',
    marginTop: 20,
    alignItems:'flex-start',
  },
  
  PrimaryColor: {
    backgroundColor: '#F6820E', // Cambié color a backgroundColor
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    top:'12%',
    width: '80%',
    padding: 20,
    
    backgroundColor: 'rgba(209, 93, 7,0.9)',
    borderRadius: 10,
  },
  title: {
    color: 'white',
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
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
  },
  IconoPosision: {
    position: 'absolute',
    right: 5,
    top: -20,
    color: '#000',
  },
  button: {
    backgroundColor: 'black',
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

  // **Estilos para Registro**
  containerRegistro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    marginTop: '5%',
    backgroundColor: '#EDECE8',
  },

  containerDatos: {
    top:'-1%',
    width: '95%',
    padding: 20,
    backgroundColor:'gray',
    borderTopStartRadius:25,
    borderTopRightRadius:25,
  },


  titleRegistro: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: '2%',
  },
  input1: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
  },
  buttonRegistro: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    marginTop:'3%',
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
    marginTop:'10%',
    width: '100%',
    height: '100%',
  },
//estilos para registro de mascotas 

unitButton: {
  padding: 10,
  borderRadius: 5,
  marginLeft: 5,
},

imagePreview: {
  width: 100,
  height: 100,
  borderRadius: 10,
  marginVertical: 10,
},


  // **Estilos Generales de Modales**
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalContent: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#159FAD',
    marginBottom: 20,
    textAlign: 'center',
  },

  // **Estilos de la Tabla**
  headerTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: '#159FAD',
    paddingRight: 20,
    left: 20,
  },
  headerTableText: {
    fontSize: 16,
    fontWeight: '600',
  },
  textHeaderInf: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#159FAD',
    marginTop: 20,
    textAlign: 'center',
  },

  // **Botones Generales**
  buttonAddCard: {
    backgroundColor: '#159FAD',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  textButtonAddCard: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
    // Barra superior con menos altura
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: '10%', // Ajusta la altura
      backgroundColor: Colors.primary,
    },
    welcomeText: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
    },
  
    // Contenedor para la lista de mascotas
    petInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
     // backgroundColor: Colors.secondary,
      paddingHorizontal: '5%',
      paddingVertical: '40%', // Espacio adicional alrededor de las mascotas
    },
  
    // Tarjeta individual de cada mascota
    petCard: {
      alignItems: 'center',
      marginHorizontal: 5, // Más cerca entre tarjetas
      paddingVertical: 10,
      width: 150, // Ajuste del ancho de cada tarjeta
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
  
    // Nombre de la mascota en la parte superior de la tarjeta
    petName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'black',
    },
  
    // Contenedor de la imagen de la mascota con círculo más grande
    petImageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 110, // Ajuste del tamaño del círculo
      height: 110,
      borderRadius: 55,
      backgroundColor: '#f2f2f2',
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    petImage: {
      width: 110,
      height: 110,
      borderRadius: 55,
    },
  
    // Estilos para el marcador "No Image" en caso de que no haya imagen de la mascota
    petImagePlaceholder: {
      width: 110,
      height: 110,
      borderRadius: 55,
      backgroundColor: '#D3D3D3',
      justifyContent: 'center',
      alignItems: 'center',
    },
    petImagePlaceholderText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },
  
    // Botón para agregar una nueva mascota
    addPetButton: {
      backgroundColor: Colors.tercer,
      borderRadius: 50,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
    },
  
    // Contenedor de promociones
    promoContainer: {
      marginHorizontal: 20,
      marginVertical: 20,
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
  
    // Título de promociones
    promotionsTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
      marginLeft: 20,
      
    },
  
    // Contenedor de recuadros de promociones con separación
    promotionsContainer: {
      flexDirection: 'row',
      marginTop: 10,
      paddingHorizontal: 5, // Separación interna
      
    },
  
    // Recuadro individual de promoción con mayor separación
    promotionBox: {
      width: 120,
      height: 100,
      marginRight: 15, // Aumentar espacio entre recuadros
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      backgroundColor: '#f9f9f9',
    },
    promotionText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
  
    // Menú inferior con iconos
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      backgroundColor: Colors.secondary,
    },
    icon: {
      fontSize: 30,
      color: Colors.primary,
    },
    //moda


    listItem: {
      padding: 20,
      marginVertical: 8,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    listItemText: {
      flex: 1,
      marginLeft: 16,
      fontSize: 18,
    },

    contentPrincipal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el overlay del modal
    },
    contentModal: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    headerModal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    },
    titleModal: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1, // Toma todo el espacio disponible menos el del ícono de cerrar
      textAlign: 'left',
      color: '#333'
    },
    iconCard: {
      padding: 10 // Espacio para facilitar la interacción táctil
    },
    imageModal: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginVertical: 20
    },
    messageStock: {
      fontSize: 16,
      color: 'red',
      marginTop: 10
    },
    contentQuantity: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10
    },
    buttonQuantity: {
      backgroundColor: '#e0e0e0',
      padding: 10,
      borderRadius: 5
    },
    textButtonQuantity: {
      fontSize: 20,
      color: '#000'
    },
    textQuantity: {
      fontSize: 16,
      marginHorizontal: 20,
      minWidth: 40,
      textAlign: 'center'
    },
 // Estilo del contenedor de la tarjeta de producto
 contentCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, // Para sombras en Android
},
// Estilo de la imagen en la tarjeta de producto
imageCard: {
  width: 80,
  height: 80,
  borderRadius: 10,
  marginRight: 15,
},
// Título del producto en la tarjeta
titleCard: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},


// Estilos para el modal de producto


iconCardModal: {
  padding: 10, // Espacio para el ícono de cierre
},

 // Contenedor principal del menú
 containerMenu: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
},
// Estilo de la imagen de fondo
backgroundImageMenu: {
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0.3, // Transparencia para hacer que el fondo no sobresalga tanto
},
// Contenedor de elementos dentro del menú
containerMenuF: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},
// Estilo para el número de productos en el carrito
numCar: {
  position: 'absolute',
  top: -5,
  right: -10,
  backgroundColor: '#ff6347',
  color: '#fff',
  borderRadius: 10,
  paddingVertical: 2,
  paddingHorizontal: 6,
  fontSize: 12,
  fontWeight: 'bold',
  textAlign: 'center',
},
// Posicionamiento del ícono del carrito
posicionF: {
  position: 'absolute',
  top: 10,
  right: 10,
  padding: 5,
},
});



