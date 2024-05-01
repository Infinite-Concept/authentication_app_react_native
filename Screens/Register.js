import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons,  EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import SvgComponent from '../Components/Images/GoogleIcon';

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");


  const navigation = useNavigation();


  const handleSubmit = async () => {

    const user = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password
    }

    axios.post("http://192.168.8.120:3000/register", user)
    .then((response) => {
      console.log(response);

      Alert.alert(
        "Registration successful",
        "you have been registered successfully",[
          {text: 'OK', onPress: () => navigation.replace('LoginScreen')},
        ]
      )
      

    })
    .catch((err) => {
      Alert.alert(
        "Registration failed",
        "An error occurred during registration"
      );
      console.log("error", err);
    })
  }


  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{paddingTop: 40, paddingHorizontal: 30}}>
        <Text style={[styles.text, styles.color, {fontSize: 20, marginBottom: 3} ]}>Create Account</Text>
        <Text style={[styles.text, styles.color1, {fontSize: 14, marginBottom: 30}]}>Hello, welcome to our account</Text>

        <View>
            <View style={{flexDirection: "row", gap: 20, width: "100%"}}>
                <View style={[styles.form_control, {width: "47%"}]}>
                <Ionicons name="person-outline" size={25} color="black" />
                    <TextInput
                    style={[styles.input]}
                    placeholder="First name"
                    placeholderTextColor="#aaa"
                    onChangeText={setfirstName}
                    value={firstName}
                    />
                </View>

                <View style={[styles.form_control , {width: "47%"}]}>
                <Ionicons name="person-outline" size={25} color="black" />
                    <TextInput
                    style={[styles.input]}
                    placeholder="Last name"
                    placeholderTextColor="#aaa"
                    onChangeText={setlastName}
                    value={lastName}
                />
                </View>
            </View>

          <View style={[styles.form_control]}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
            style={[styles.input]}
            placeholder="Phone number"
            placeholderTextColor="#aaa"
            onChangeText={setphone}
            value={phone}
            />
          </View>

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
            placeholder="Choose password"
            placeholderTextColor="#595959"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            />
          </View>

          <View style={[styles.form_control]} >
            <EvilIcons name="lock" size={30} color="black" />
            <TextInput
            style={[styles.input]}
            placeholder="Confirm password"
            placeholderTextColor="#595959"
            secureTextEntry={true}
            />
          </View>

          <LinearGradient colors={['#FF9B63', '#FF621F']} style={styles.button}>
            <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

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
          <Text style={styles.bottomText2}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen') }>
            <Text style={styles.bottomText1} >Login</Text>
          </TouchableOpacity> 
        </View>
        


      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
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
    gap: 15, 
    paddingBottom: 7,
    marginTop: 35,
  },
  input: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    color: "#595959"
  },
  button:{
    marginTop: 50,
    paddingVertical: 17,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Inter-SemiBold",
  },
  lineWrapper: {
    flexDirection: "row",
    marginTop: 50,
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
    marginTop: 40,
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
    marginBottom: 50
  },
  bottomText2: {
    fontFamily: "Inter-SemiBold",
    color: "#979797"
  },
  bottomText1: {
    color: "#FF621F",
    fontFamily: "Inter-SemiBold"
  }

})