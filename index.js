/**
 * @format
 */

import React from 'react'
import {AppRegistry, StatusBar, View} from 'react-native';
// import App from './App';
import Login from './login'
import Home from './home'
import colors from './colors'
import {name as appName} from './app.json';

console.disableYellowBox = true;

const Root = () => {
    return(
    <View style={{flex:1}}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content"></StatusBar>
        {/* <Home/> */}
        <Login/>
    </View>)
}

AppRegistry.registerComponent(appName, () => Root);
