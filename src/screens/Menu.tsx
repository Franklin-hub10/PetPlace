import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

export const Menu = () => {

  return (
<View style={styles.container}>
<ImageBackground
        source={require('../../assets/startup_screen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      </ImageBackground>
    </View>
  )
}



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
