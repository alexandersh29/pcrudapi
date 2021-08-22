import React from 'react'
import {Button} from 'react-native-paper'


const BarraSuperior = ({navigation, route}) =>{

  const handlePress = () => {
    navigation.navigate("Nuevo Cliente")
  }
 

  return(
    <Button onPress={ () => handlePress() }
    
    
    > Crear </Button>
  );
}

export default BarraSuperior;
