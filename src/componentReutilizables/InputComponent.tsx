import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from '../appTheme/AppTheme'


interface Props {
    placeholder:string;
    placeholderTextColor:string;
    setNombres: (text: string) => void;
    onChangeText:() => void;
    nombres:string;
    value:string;
    secureTextEntry?: boolean;
}



export const InputComponent = ({placeholder, setNombres,nombres, value} :Props) => {
  return (
    <View>
    <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#aaa"
    onChangeText={setNombres}
    value={nombres}
    autoCapitalize="none"
  />
  </View>
  )
}

