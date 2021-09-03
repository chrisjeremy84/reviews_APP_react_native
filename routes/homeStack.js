import  { createStackNavigator } from 'react-navigation-stack';
import  { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';

const screens = {
    Home: { 
        screen: Home, 
        navigationOptions:{title: 'Review'},   
    },
    
    Details: { 
        screen: Details, 
        navigationOptions:{title: 'Details',
    },    
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#000000',
        headerStyle:{backgroundColor: "#ffd1a1", height: 100 }
    }
})
export default createAppContainer(HomeStack)