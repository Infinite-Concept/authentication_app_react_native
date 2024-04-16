import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


// ==== image component ====
import Infinity from "../Components/Images/Infinity"
import Logo from "../Components/Images/Logo"


const Load = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.load}>
        <StatusBar hidden />
      <LinearGradient
        // Background Linear Gradient
        colors={['#FF9B63', '#FF621FC9']}
        style={styles.background}
      >
        <View style={styles.home}>
            <Logo/>

            <Text style={{fontFamily: "Poppins-Bold", color: "#ffffff", fontSize: 25, marginTop: 7}}>aliments</Text>

            <Text style={{fontFamily: "Poppins-Regular", color: "#ffffff", fontSize: 16, marginTop: -8}}>Food Delivery Service</Text>

            <View style={styles.last} >
                <Infinity />
                <Text style={{textTransform: "uppercase", fontFamily: "Inter-Bold", color: "#ffffff", fontSize: 14, letterSpacing: 5, marginTop: 4}}>loopr</Text>
            </View>

        </View>

      </LinearGradient>
    </View>
  )
}

export default Load

const styles = StyleSheet.create({
    load: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    last: {
        bottom: 20,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },

})