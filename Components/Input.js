import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({placeholder, onChangeText, value, keyboardType, secureTextEntry, children }) => {
  return (
    <View style={[styles.form_control]}>
        {children}
        <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        onChangeText={onChangeText}
        value={value} 
        keyboardType={keyboardType} 
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
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
        color: "#595959",
        width: "100%"
    },
})