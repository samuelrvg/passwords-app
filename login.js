import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Login = () => {
    return(
    <View style={styles.container}>
        <View>
            <TextInput style={styles.textInput} underlineColorAndroid='#00b894' placeholder='username' keyboardType='email-address'/>
            <TextInput style={styles.textInput} underlineColorAndroid='#00b894' placeholder='password' keyboardType='number-pad' secureTextEntry={true}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>login</Text>
            </TouchableOpacity>
        </View>
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
        backgroundColor:'#00b894',
        borderRadius:3,
        marginTop:10,
        padding:10
    },
    textButton:{
        textAlign:'center',
        color:'white',
        fontSize:16
    }
})

export default Login;