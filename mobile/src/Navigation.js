import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
//import { Navigation } from 'react-native-navigation'
//import Search from '../Components/Search'
import Splash from './Splash'
import Menu from './Menu'
import UserEdit from './UserEdit';
import WhiteLicense from './WhiteLicense';
import AnnotationMenu from './AnnotationMenu';


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
  WhiteLicense: createBottomTabNavigator({
    Ajout : {
      screen: AnnotationMenu,
      navigationOptions: {
        title: 'Ajout'
      }
    },
    Resume : {
      screen: AnnotationMenu,
      navigationOptions: {
        title: 'Résumé'
      }
    },
  },{
    tabBarOptions: {
      // activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 24,
      },

    }
  }),
})

export default createAppContainer(AppNavigator)
//export default SearchStackNavigator