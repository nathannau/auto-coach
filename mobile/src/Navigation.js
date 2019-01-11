import { createStackNavigator, createAppContainer } from 'react-navigation'
//import { Navigation } from 'react-native-navigation'
//import Search from '../Components/Search'
import Splash from './Splash'
import Menu from './Menu'
import UserEdit from './UserEdit';
import WhiteLicense from './WhiteLicense';


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
  EditUser: {
    screen: UserEdit,
    navigationOptions: {
      //title: 'Nouveau'
    }
  },
  WhiteLicense: {
    screen: WhiteLicense,
    navigationOptions: {
      title: 'Permis Blanc'
    }
  },
})

export default createAppContainer(AppNavigator)
//export default SearchStackNavigator