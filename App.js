import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Load from './Screens/Load';
import Log from './Screens/Log';
import Login from './Screens/Login';
import {Loadfont} from './Components/Loadfont';



const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    Loadfont();
  }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Loading" component={Load} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={Log} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})