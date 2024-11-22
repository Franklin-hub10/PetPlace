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
  containerDatosM: {
    top:'2%',
    width: '100%',
    height:'100%',
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
    width: '90%', // Ancho del modal (ajusta según prefieras)
    padding: 20, // Espaciado interno
    backgroundColor: '#fff', // Fondo blanco para el contenido del modal
    borderRadius: 10, // Bordes redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
    alignItems: 'center', // Centrar contenido dentro del modal
  
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
      backgroundColor: Colors.primary,
      borderRadius: 50,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
  //nuevas promos


  promotionImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },

  promotionPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF7C0A',
    marginTop: 5,
  },
  discountBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF6347',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
  },
  discountBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
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

 globalTitle: {
  fontSize: 24, // Tamaño de la fuente
  fontWeight: 'bold', // Negrita
  color: Colors.secondary, // Color del texto
  textAlign: 'center', // Alineación
  marginVertical: 10, // Margen vertical
  
},
containerMenuF: {
  flexDirection: 'row', // Alineación horizontal
  justifyContent: 'space-between', // Separar título e ícono
  alignItems: 'center', // Centrar verticalmente
  paddingHorizontal: 16, // Espaciado lateral
  backgroundColor: Colors.primary,
  marginTop: '5%', // Margen superior opcional
  color:Colors.secondary,
},

cartIconContainer: {
  position: 'relative', // Para posicionar el contador
  alignItems: 'center', // Centrar ícono y contador
},
cartIcon: {
  marginLeft: 2, // Separación opcional si el ícono está muy cerca del título
},
numCar: {
  position: 'absolute',
  top: -5, // Ajusta según el diseño
  right: -5, // Ajusta según el diseño
  backgroundColor: 'black', // Fondo del contador
  color: Colors.secondary, // Color del texto
  borderRadius: 10, // Redondear el contador
  paddingHorizontal: 5, // Espaciado interno horizontal
  fontSize: 12, // Tamaño de texto
  fontWeight: 'bold',
  textAlign: 'center',
},
// Estilos para el modal de producto




containerMenu: {
  flex: 1,
  backgroundColor: '#f5f5f5', // Color de fondo principal
  justifyContent: 'space-between',
},

backgroundImageMenu: {
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0.1, // Menor opacidad para que los elementos sean más visibles
},





posicionF: {
  position: 'absolute',
  top: 2,
  right: 10,
  padding: 5,
  color: Colors.secondary,

},

iconContainer: {
  flexDirection: 'row', // Alinea los íconos en fila
  justifyContent: 'space-around', // Distribución uniforme
  alignItems: 'center', // Centra los íconos verticalmente
  paddingVertical: 10, // Espaciado interno vertical
  backgroundColor: '#fff', // Fondo blanco para el menú
  borderTopWidth: 1, // Línea superior como separador
  borderTopColor: '#ddd', // Color del separador
  position: 'absolute', // Fija la posición
  bottom: 0, // Ubicado al fondo
  width: '100%', // Ocupa todo el ancho
},

contentBody: {
  flex: 1, // Ocupa todo el espacio disponible
  padding: 10, // Espaciado interno
  backgroundColor: '#f5f5f5', // Fondo claro
},

icon: {
  fontSize: 28, // Tamaño ajustado para íconos
  color: Colors.primary, // Color principal para los íconos
},

titleCard: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#333',
 // marginBottom: 5, 
  maxWidth: '100%', 
  overflow: 'hidden', 
},
priceText: {
  fontSize: 14,
  color: '#FF7C0A', 
  fontWeight: '600',
  textAlign: 'center',
},

contentCard: {
  flex: 1,
  flexDirection: 'column', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    width: 150, 
    height: 200, 
  
},

imageCard: {
  width: 100,
  height: 100,
  borderRadius: 10,
  marginBottom: 2,
},

//estilos del modal de fotos de mascotas




closeModalButton: {
  marginTop: 20,
  padding: 10,
  backgroundColor: '#FF7C0A',
  borderRadius: 10,
},
closeModalText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
imageOption: {
  width: 100, // Ancho de la imagen
  height: 100, // Alto de la imagen
  borderRadius: 10, // Bordes redondeados
  margin: 10, // Espaciado alrededor de la imagen
  borderWidth: 2, // Ancho del borde
  borderColor: '#FF7C0A', // Color del borde para resaltar
},
petCardContainer: {
  flex: 1,
  margin: 10,
  padding: 15,
  backgroundColor: '#f5f5f5',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
  alignItems: 'center',
},

petCardName: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 5,
  color: '#333',
},

petCardText: {
  fontSize: 14,
  color: '#555',
  marginBottom: 5,
  textAlign: 'center',
},

petCardEditButton: {
  backgroundColor: '#4CAF50',
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
  alignSelf: 'stretch',
},

petCardDeleteButton: {
  backgroundColor: '#FF5733',
  padding: 10,
  borderRadius: 5,
  marginTop: 5,
  alignSelf: 'stretch',
},



// Estilos relacionados con las tarjetas de mascotas
mascotaBotonesContainer: {
  flexDirection: 'row', // Organiza los botones en una fila
  justifyContent: 'space-between', // Espacio entre los botones
  marginTop: 10,
  width: '100%',
  marginBottom:'40%',
},


mascotasTitulo: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginVertical: 20,
},

mascotaCard: {
  flex: 1,
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  margin: 5,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
 
},

mascotaNombre: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},

mascotaDetalle: {
  fontSize: 10,
  color: '#666',
  marginBottom: 5,
  textAlign: 'center',
},

mascotaBotonEditar: {
  backgroundColor: Colors.primary,
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
  alignSelf: 'stretch',
  alignItems: 'center',
},

mascotaBotonEliminar: {
  backgroundColor: 'black',
  padding: 10,
  borderRadius: 5,
  marginTop: 5,
  alignSelf: 'stretch',
  alignItems: 'center',
},

mascotaBotonTexto: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},


petCardTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},

petCardDetail: {
  fontSize: 14,
  color: '#666',
  marginBottom: 5,
  textAlign: 'center',
},

petCardButtonEdit: {
  backgroundColor: '#4CAF50',
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
  alignSelf: 'stretch',
  alignItems: 'center',
},

petCardButtonDelete: {
  backgroundColor: '#FF5733',
  padding: 10,
  borderRadius: 5,
  marginTop: 5,
  alignSelf: 'stretch',
  alignItems: 'center',
},

petCardButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},


contentPrincipalP: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro translúcido
},
contentModal: {
  backgroundColor: '#fff', // Fondo del modal
  borderRadius: 10,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
headerModalP: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 15,
},

headerTableInf: {
  flexDirection: 'row',
  alignItems: 'center',
},
itemContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  paddingVertical: 10,
},
imageItem: {
  width: 50,
  height: 50,
  borderRadius: 5,
  marginRight: 10,
},
itemText: {
  fontSize: 14,
  color: '#555',
  textAlign: 'center',
},
textTotalPay: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  marginTop: 10,
},
buttonAddCard: {
  backgroundColor: '#FB6F0F',
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 15,
  alignItems: 'center',
  marginTop: 15,
},
textButtonAddCard: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#fff',
},

});



