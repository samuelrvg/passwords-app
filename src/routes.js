import Login from './screens/login'
import Home from './screens/home'
import Details from './screens/details' 

import { createAppContainer, createStackNavigator } from 'react-navigation'

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Home,
        Details
    })
)

export default Routes;