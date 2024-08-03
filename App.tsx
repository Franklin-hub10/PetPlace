
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Portada from './src/screens/Portada';

export default function App() {
  return (
<SafeAreaView style = {styles.container}>


<Portada/>


</SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {

    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: '100%', 
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
