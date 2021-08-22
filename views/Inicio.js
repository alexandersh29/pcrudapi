import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { List, Headline, Button, FAB } from 'react-native-paper';
import axios from 'axios'
import globalStyles from '../style/global'

const Inicio = ({navigation}) =>{

  const [clientes, setClientes] = useState([]);
  const [consultarApi, setConsultarApi] = useState(true);
  
  useEffect( () => {

    const obtenerClientes = async () =>{
        try{
          const resultado = await axios.get('http://localhost:3000/clientes');
          setClientes(resultado.data)
          setConsultarApi(false)

        } catch(e){
          console.log(e)
        }

    }

    if(consultarApi){
      obtenerClientes();
    }
     
      
    }, [consultarApi]);
  
  return(
    <View style={styles.contenedor}>
      <Button onPress={()=> navigation.navigate("Nuevo Cliente", { setConsultarApi }) } >
      nuevo cliente
      </Button>

      <Headline style={styles.titulo} >{ clientes.length > 0 ? 'Clientes': 'No hay clientes' }</Headline>
      <FlatList
        data={clientes}
        
        renderItem={({item}) =>(
              <List.Item
                title={item.nombre}
                description={item.empresa}
                onPress ={  ()=> navigation.navigate("Detalle del Cliente", ({item})) }
              />
        )}
      />
      <FAB
          icon='plus'
          style={styles.fab}
          onPress={()=> navigation.navigate("Nuevo Cliente", { setConsultarApi }) }
      />
    </View>
  );
}

export default Inicio;

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
  },
  fab:{
    position:'absolute',
    margin:20,
    right:0,
    bottom:20
  }

})