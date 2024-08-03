import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons,  EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import SvgComponent from '../Components/Images/GoogleIcon';
import { ScrollView } from 'react-native-gesture-handler';

const Login = () => {

  const navigation = useNavigation();

  const[email, setEmail] = useState('')
  const[phoneNumber, setPhoneNumber] = useState('')
  const[password, setPassword] = useState('')


  const[showEmail, setShowEmail] = useState(true)
  const[showPass, setShowPass] = useState(false)
  const[isLoginForm, setLoginForm] = useState(true)
  const slideAnim = new Animated.Value(0);


  const handleButton1Click = () => {
    setShowEmail(true);
    setShowPass(false);
  };

  const handleButton2Click = () => {
    setShowEmail(false);
    setShowPass(true);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView style={{paddingTop: 40, paddingHorizontal: 30}}>
        <Text style={[styles.text, styles.color, {fontSize: 20, marginBottom: 3} ]}>Login Account</Text>
        <Text style={[styles.text, styles.color1, {fontSize: 14, marginBottom: 50}]}>Hello, welcome back to our account</Text>

        <View style={{borderRadius: 20, backgroundColor: "#EDEDED", flexDirection: "row", paddingHorizontal: 7, justifyContent: "space-between", marginBottom: 30, alignItems: "center", paddingVertical: 19, paddingLeft: 30, paddingRight: 60, position: "relative" }}>

          <View style={[styles.animateButton, {right: showEmail ? 10 : null, left: showPass ? 10 : null, paddingHorizontal: showPass ? 75 : 65, }]}></View>
          
          <TouchableOpacity onPress={handleButton2Click}>
            <Text style={[styles.toggleText, {color: showEmail? "#4F4F4F" : "#000000" }]}>Phone Number</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toggle} onPress={handleButton1Click}>
            <Text style={[styles.toggleText, {color: showPass? "#4F4F4F" : "#000000" }]}>Email</Text>
          </TouchableOpacity>
        </View>

        {showEmail && (
        <View>
          <View style={[styles.form_control]}>
            
            <MaterialIcons name="alternate-email" size={25} color="black" />
            <TextInput
            style={[styles.input]}
            placeholder="Email"
            placeholderTextColor="#aaa"
            onChangeText={setEmail}
            value={email}
            />
          </View>

          <View style={[styles.form_control]} >
            <EvilIcons name="lock" size={30} color="black" />
            <TextInput
            style={[styles.input]}
            placeholder="Password"
            placeholderTextColor="#595959"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            />
          </View>

          <LinearGradient colors={['#FF9B63', '#FF621F']} style={styles.button}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> )}

        {showPass && (
        <View>
          <View style={[styles.form_control]}>
            
            <MaterialIcons name="alternate-email" size={25} color="black" />
            <TextInput
            style={[styles.input]}
            placeholder="Phone number"
            placeholderTextColor="#aaa"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            />
          </View>

          <LinearGradient colors={['#FF9B63', '#FF621F']} style={styles.button}>
            <TouchableOpacity >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> )}

        <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <Text style={styles.lineText}>OR</Text>
            <View style={styles.line}></View>
        </View>

        <View style={styles.google}>
          <SvgComponent />
          <Text style={styles.googleText}>Login with Google</Text>
        </View>

        <View style={styles.bottomText}>
          <Text style={styles.bottomText2}>Not Registered yet? </Text>
          <TouchableOpacity onPress={() => navigation.replace('RegisterScreen') } activeOpacity={1}>
            <Text style={styles.bottomText1} >Create an Account</Text>
          </TouchableOpacity> 
        </View>
        
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  toggleText:{
    color: "#4F4F4F", 
    fontFamily: "Inter-SemiBold", 
    fontSize: 16
  },
  text: {
    fontFamily: "Inter-SemiBold",
    textAlign: 'left'
  },
  color: {
    color: "#000000"
  },
  color1: {
    color: "#595959"
  },
  form_control: {
    flexDirection: "row",
    borderBottomColor: "#979797", 
    borderBottomWidth: 1, 
    gap: 20, 
    paddingBottom: 7,
    marginTop: 20,
  },
  input: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    color: "#595959",
    width: "100%"
  },
  button:{
    marginTop: 50,
    paddingVertical: 17,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Inter-SemiBold"
  },
  lineWrapper: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 15
  },
  line: {
    width: "45%",
    height: 2,
    backgroundColor: "#B6B6B6"
  },
  lineText: {
    color: "#000000",
    fontFamily: "Inter-SemiBold"
  },
  google: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: "#000000a2",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 30,
    gap: 50
  },
  googleText: {
    textAlign: "center",
    color: "#000000",
    fontFamily: "Inter-SemiBold"
  },
  bottomText: {
    flexDirection: "row",
    marginTop: 40,
  },
  bottomText2: {
    fontFamily: "Inter-SemiBold",
    color: "#979797"
  },
  bottomText1: {
    color: "#FF621F",
    fontFamily: "Inter-SemiBold"
  },
  animateButton: {
    position: "absolute",
    shadowColor: "#000000a2",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#ffffff",
    paddingVertical: 24,
    borderRadius: 14,
    // left: 10,
    // right: 10
  }

})