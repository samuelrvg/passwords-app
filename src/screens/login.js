import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import colors from '../colors'
import { user } from '../data'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('samuel.rvg@gmail.com');
    const [password, setPassword] = useState('123456');

    // useEffect(() => {
    //     setEmail(user.email)
    //     setPassword(user.password)
    // }, {})

    _onPress = () => {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <TextInput onChangeText={setEmail} value={email} style={styles.textInput} underlineColorAndroid={colors.primary} placeholder='e-mail' keyboardType='email-address'/>
            <TextInput onChangeText={setPassword} value={password} style={styles.textInput} underlineColorAndroid={colors.primary} placeholder='password' keyboardType='number-pad' secureTextEntry={true} maxLength={12}/>
            <TouchableOpacity style={styles.button} onPress={() => _onPress()}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

Login.navigationOptions = {
    header:null,
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
    },
    textInput:{
        fontSize:21,
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