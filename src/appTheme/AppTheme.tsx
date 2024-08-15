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
            bottom:0.1

           // marginBottom:20       
          },

  
      });