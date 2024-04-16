import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons,  EvilIcons } from '@expo/vector-icons';

const Login = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <Text style={{textAlign: 'left', color: "#000000", fontFamily: "Inter-SemiBold"}}>Login Account</Text>
        <Text>Hello, welcome back to our account</Text>

      <View>
        <Text>Phone Number</Text>
        <Text>Email</Text>
      </View>

      {/* <View>
        <View style={styles.inputContainer}>
            
            <MaterialIcons name="alternate-email" size={24} color="black" />
            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            // onChangeText={setEmail}
            // value={email}
            />
        </View>

        <View style={styles.inputContainer}>
            <EvilIcons name="lock" size={24} color="black" />Z
            <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
            // onChangeText={setPassword}
            // value={password}
            />
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})