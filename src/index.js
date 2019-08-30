import React from 'react'
import { StatusBar, View } from 'react-native';
import colors from './colors'
import Routes from './routes'

const App = () => (
    <View style={{flex:1}}>
        <StatusBar barStyle='light-content' backgroundColor={colors.primary}/>
        <Routes/>
    </View>
)

export default App;