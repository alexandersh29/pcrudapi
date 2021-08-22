import React from 'react';
import {  View, StyleSheet, Alert, Button} from 'react-native';
import {Headline, Text, FAB} from 'react-native-paper';
import axios from 'axios';

const DetallesCliente = ({navigation, route}) => {

  const { setConsultarApi } = route.params;
  const {nombre, telefono, correo, empresa} = route.params.item;

  const mostrarConfirmacion = () =>{
    Alert.alert(
      '¿Deseas elimiar este cliente?'
    )
  }

  const eliminarContacto = () =>{
    Alert.alert(
      '¿eliminar?'
    )
    console.log('elimimando..')
  }
  


  return (
    <View style={styles.contenedor} >
      <Headline style={styles.titulo} >{nombre}</Headline>
      <Text style={styles.txto} > Correo: {correo} </Text>
      <Text style={styles.txto} > Telefono: {telefono} </Text>
      <Text style={styles.txto} > Empresa: {empresa} </Text>

      <Button
        onPress={ ()=> eliminarContacto()}
        title="Eliminar"
        color="#FF0000"
        
      />

       <FAB
          icon='pencil'
          style={styles.fab}
          onPress={()=> navigation.navigate("Nuevo Cliente", { cliente: route.params.item, setConsultarApi}) }
      />
      
    </View>
  );
};

export default DetallesCliente;

const styles = StyleSheet.create({

  titulo:{
    textAlign:'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
  },
  contenedor:{
    flex:1,
    marginTop:20,
    marginHorizontal:'2.5%'
  },
  txto:{
    marginBottom:20,
    fontSize:18
  },
  
   fab:{
    position:'absolute',
    margin:20,
    right:0,
    bottom:20
  }

})