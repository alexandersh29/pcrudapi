import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { TextInput, Headline, Button, Portal, Paragraph, Dialog } from 'react-native-paper';
import globalStyles from '../style/global';
import axios from 'axios'


const NuevoCliente = ({navigation, route}) =>{

  const { setConsultarApi } = route.params;
  
  const [nombre, setName] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, guardarAlerta] = useState(false);

  //detectar si estamos editando o creando
  useEffect(() => {
    if(route.params.cliente){
      console.log('editando')

      const  {nombre, telefono, empresa, correo} = route.params.cliente;

      setName(nombre);
      setTelefono(telefono);
      setEmpresa(empresa);
      setCorreo(correo);
    }else{
      console.log('creando')

    }

  }, []);


  const guardarCliente = async () =>{

    //validar
    if(nombre==='' || telefono==='' || correo==='' || empresa===''){
      guardarAlerta(true)
      return;
    }

    //generar cliente
    const cliente = {nombre, telefono, empresa, correo}
    console.log(cliente)


    //guardarCliente en la api
    try{

      await axios.post('http://localhost:3000/clientes', cliente)

    } catch (e){
      console.log(e)
    }
    

    //redireccionar
    navigation.navigate('Inicio');

    //limpiar form
    setName('');
    setTelefono('');
    setEmpresa('');
    setCorreo('');

    setConsultarApi(true);
  }

  

  return(
<View style={styles.contenedor} >
  <Headline style={styles.titulo}>
    Añadir Nuevo Cliente
  
  </Headline>
  <TextInput
  label='Nombre'
  onChangeText={(texto)=> setName(texto)}
  style={styles.input}
  />
  <TextInput
  label='Telefono'
  onChangeText={(texto)=> setTelefono(texto)}
  style={styles.input}
  />
  <TextInput
  label='Correo'
  onChangeText={(texto)=> setCorreo(texto)}
  style={styles.input}
  />
  <TextInput
  label='Empresa'
  onChangeText={(texto)=> setEmpresa(texto)}
  style={styles.input}
  />

  <Button icon="pencil-circle" mode="contained" onPress={() => guardarCliente()} >
  Guardar Cliente
  </Button>

  <Portal>
    <Dialog
      visible={alerta}
      onDismiss={ () => guardarAlerta(false) }
    >

      <Dialog.Title>Error</Dialog.Title>
      <Dialog.Content>
        <Paragraph> Los Campos son Obligatorios  </Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
      <Button onPress={()=> guardarAlerta(false)} >OK</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>

  
</View>

  );
}

export default NuevoCliente;

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
  input:{
    marginBottom:20,
    backgroundColor: 'transparent'
  }

})