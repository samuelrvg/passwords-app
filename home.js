import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import data from './src/data'

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>service: gmail</Text>
                <Text>password: ******</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#55efc4',
        paddingHorizontal:20,
        paddingTop:10
    },
    card:{
        // backgroundColor:'red',
        // height:40
    },
    cardText:{
        
    }
})

export default Home;