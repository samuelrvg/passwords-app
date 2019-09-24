import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../colors'

const Details = ({ navigation }) => {

    const contents = navigation.getParam('content', ':( is not found');

    return(
        <View style={styles.container}>
            <FlatList data={contents}
                renderItem={({item}) => (
                <View style={styles.card} key={item.id}>
                    <Text style={styles.cardText}>Login: {item.login}</Text>
                    <Text style={styles.cardText}>Password: {item.password}</Text>
                    <Text style={styles.cardText}>Observaçoes: {item.obs}</Text>
                </View>
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
        margin:5,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    cardText:{
        fontSize:18,
        color:colors.white,
    }
})

Details.navigationOptions = ({ navigation }) => ({
    title:`${navigation.getParam('service', ':( is not found')}`,
    headerLeftContainerStyle: {
        paddingRight: 10,
      },
})

export default Details;