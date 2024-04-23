import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Load from './Screens/Load';
import Log from './Screens/Log';
import Login from './Screens/Login';
import Register from './Screens/Register';


import useFonts from './hooks/useFonts';


const Stack = createStackNavigator();

const App = () => {

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Loading" component={Load} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={Log} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})