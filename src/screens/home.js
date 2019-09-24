import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
import { data } from '../data'
import colors from '../colors'

const Home = ({ navigation }) => {

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      });

    Home.navigationOptions = {
        title:'Home',
        headerLeft:(
            <Button
            onPress={() => navigation.dispatch(resetAction)}
            title="Sair"
            color="black"//{colors.primary}
        />)
    }

    return(
        <View style={styles.container}>
            <FlatList data={data}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Details', item.content)}>
                            <Text style={styles.cardText}>{item.service}</Text>
                        </TouchableOpacity>
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

export default Home;