import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import colors from './colors'

const Login = () => {
    return(
    <View style={styles.container}>
        <>
            <TextInput style={styles.textInput} underlineColorAndroid={colors.primary} placeholder='e-mail' keyboardType='email-address'/>
            <TextInput style={styles.textInput} underlineColorAndroid={colors.primary} placeholder='password' keyboardType='number-pad' secureTextEntry={true} maxLength={12}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>login</Text>
            </TouchableOpacity>
        </>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
    },
    textInput:{
        fontSize:16,
        paddingBottom:10,
    },
    button:{
        backgroundColor:colors.primary,
        borderRadius:3,
        marginTop:10,
        padding:10
    },
    textButton:{
        textAlign:'center',
        color:colors.white,
        fontSize:16
    }
})

export default Login;