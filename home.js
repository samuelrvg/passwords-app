import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { data } from './data'
import colors from './colors'

const Home = () => {

    _onPress= () => {}

    return(
        <View style={styles.container}>
            <FlatList data={data}
                renderItem={({item}) => (
                <TouchableOpacity style={styles.card} key={item.id} onPress={() => _onPress()}>
                    <Text style={styles.cardText}>{item.service}</Text>
                </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:10
    },
    card:{
        backgroundColor: colors.primary,
        padding:10,
        borderRadius:5,
        marginBottom:15
    },
    cardText:{
        fontSize:18,
        color:colors.white,
    }
})

export default Home;