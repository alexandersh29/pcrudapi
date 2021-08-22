import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetalleCliente';
import BarraSuperior from './components/ui/Barra';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const tema = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774f2',
    accent: '#0655BF',
  },
};

const App = () => {
  return (
    <>
      <PaperProvider >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
              headreStyle: {
                backgroundColor: tema.colors.primary,
              },
              headerTintColor: tema.colors.accent,
            }}>
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                /*headerLeft: (props) => (
                  
                  <BarraSuperior
                    {...props}
                    navigation={navigation}
                    route={route}
                  />
                ),*/
              })}
            />
            <Stack.Screen
              name="Nuevo Cliente"
              component={NuevoCliente}
              options={{
                headerTitleAlign: 'center',
                title: 'Nuevo Cliente',
              }}
            />
            <Stack.Screen
              name="Detalle del Cliente"
              component={DetallesCliente}
              options={{
                title: 'Detalle del Cliente',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider >
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
