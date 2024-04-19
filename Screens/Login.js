import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons,  EvilIcons } from '@expo/vector-icons';

const Login = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={{paddingTop: 40, paddingHorizontal: 30}}>
        <Text style={[styles.text, styles.color, {fontSize: 20, marginBottom: 3} ]}>Login Account</Text>
        <Text style={[styles.text, styles.color1, {fontSize: 14, marginBottom: 50}]}>Hello, welcome back to our account</Text>

      <View style={{borderRadius: 20, backgroundColor: "#EDEDED", flexDirection: "row", paddingHorizontal: 40, paddingVertical: 20, justifyContent: "space-between", marginBottom: 50 }}>
        <Text>Phone Number</Text>
        <Text>Email</Text>
      </View>

      <View>
        <View style={[styles.form_control]}>
            
            <MaterialIcons name="alternate-email" size={25} color="black" />
            <TextInput
            style={[styles.input]}
            placeholder="Email"
            placeholderTextColor="#aaa"
            // onChangeText={setEmail}
            // value={email}
            />
        </View>

        <View style={[styles.form_control]} >
            <EvilIcons name="lock" size={30} color="black" />
            <TextInput
            style={[styles.input]}
            placeholder="Password"
            placeholderTextColor="#595959"
            secureTextEntry={true}
            // onChangeText={setPassword}
            // value={password}
            />
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
        </View>
    </View>
  )
}

export default Login

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
    gap: 20, 
    paddingBottom: 7,
    marginTop: 35,
  },
  input: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16
  }
})