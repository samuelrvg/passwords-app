import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { StackActions, NavigationActions } from 'react-navigation';
import { data } from '../data'
import colors from '../colors'

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })],
  });

const Home = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <FlatList data={data}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <TouchableOpacity key={item.id} onPress={() => {
                            navigation.navigate('Details', {content:item.content, service:item.service})
                        }}>
                            <Text style={styles.cardText}>{item.service}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

Home.navigationOptions = ({ navigation }) => ({
    title:'Accounts',
    headerLeftContainerStyle:{
        paddingHorizontal:15
    },
    headerLeft:(
        <TouchableOpacity onPress={() => navigation.dispatch(resetAction)}>
            <Icon name="log-out" size={28} color={colors.black} />
        </TouchableOpacity>)
})

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

export default Home;