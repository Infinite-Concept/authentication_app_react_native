import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons,  EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Input from '../Components/Input';
import SvgComponent from '../Components/Images/GoogleIcon';

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };


  const handleSubmit = async () => {

    setErrorMessage('')

    const phoneNumberRegex = /^[0-9]+$/;

    if(firstName == "" && lastName == "" && email == "" && phoneNumber == "" && password == "" && confirmPassword == ""){
       setErrorMessage("All field are required")
       return
    }

    if (firstName < 3) {
      setErrorMessage('Invalid first name');
      return
    } 

    if (lastName < 3) {
      setErrorMessage('Invalid last name');
      return
    } 

    if (phoneNumber < 10) {
      setErrorMessage('Invalid phone number');
      return
    } 

    if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage('Phone number must contain only numbers');
      return
    } 

    if(!validateEmail(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    if(password.length <= 6){
      setErrorMessage('Password must be at least 6 characters long');
      return
    }

    if(password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    
    try {
      const response = await axios.post("http://192.168.1.36:3790/createUser", {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword
      }, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.data

      console.log(response, data, "Hello world");
      Alert.alert()
    } catch (error) {
      console.log("error");
      setErrorMessage('Registration failed. Please try again.');
    }

  }


  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{paddingTop: 40, paddingHorizontal: 30}}>
        <Text style={[styles.text, styles.color, {fontSize: 20, marginBottom: 3} ]}>Create Account</Text>
        <Text style={[styles.text, styles.color1, {fontSize: 14, marginBottom: 30}]}>Hello, welcome to our account</Text>

        <View>
          <Input placeholder="Enter first name" onChangeText={setfirstName} value={firstName} keyboardType='default' secureTextEntry={false}  >
            <Ionicons name="person-outline" size={25} color="black" />
          </Input>

          <Input placeholder="Enter last name" onChangeText={setlastName} value={lastName} keyboardType='default' secureTextEntry={false}  >
            <Ionicons name="person-outline" size={25} color="black" />
          </Input>

          <Input placeholder="Enter phone number" onChangeText={setPhoneNumber} value={phoneNumber} keyboardType='default' secureTextEntry={false}  >
            <Feather name="phone" size={24} color="black" />
          </Input>

          <Input placeholder="Enter email address" onChangeText={setEmail} value={email} keyboardType='email-address' secureTextEntry={false}  >
            <MaterialIcons name="alternate-email" size={25} color="black" />
          </Input>

          <Input placeholder="Choose password" onChangeText={setPassword} value={password} keyboardType="default" secureTextEntry={true}  >
            <EvilIcons name="lock" size={30} color="black" />
          </Input>

          <Input placeholder="Enter confirm password" onChangeText={setConfirmPassword} value={confirmPassword} keyboardType="default" secureTextEntry={true}  >
            <EvilIcons name="lock" size={30} color="black" />
          </Input>

          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

          <LinearGradient colors={['#FF9B63', '#FF621F']} style={styles.button}>
            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.6}>
                <Text style={styles.buttonText}>Register</Text>
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
  button:{
    marginTop: 30,
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
  }, 
  error: {
    color: "red",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    marginTop: 10
  }
})