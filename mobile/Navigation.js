import { createStackNavigator, createAppContainer } from 'react-navigation'
//import { Navigation } from 'react-native-navigation'
//import Search from '../Components/Search'
import Splash from './Splash'
import Menu from './Menu'
import UserEdit from './UserEdit';


//Navigation.registerComponent(`navigation.Splash`, () => Splash);

const AppNavigator =  createStackNavigator({
  Splash: { 
    screen: Splash,
    navigationOptions: {
      title: 'Splash'
    }
  },
  Menu: { 
    screen: Menu,
    navigationOptions: {
      title: 'Menu'
    }
  },
  AddUser: {
    screen: UserEdit,
    navigationOptions: {
      title: 'Nouveau'
    }
  }
})

export default createAppContainer(AppNavigator)
//export default SearchStackNavigator