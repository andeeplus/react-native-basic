import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Login from './src/components/Screens/Login'
import FirstScreen from './src/components/Screens/FirstScreen'
import Register from './src/components/Screens/Register'
import Comments from './src/components/Screens/Comments'
import PrivateProfile from './src/components/Screens/PrivateProfile'

const Navigator = createBottomTabNavigator({  
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel:"Login",
      tabBarVisible: false
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      tabBarLabel:"Register",
      tabBarVisible: false
    }
  },
  FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {
        tabBarLabel:"Home"
      }
    },
  Comments: {
      screen: Comments,
      navigationOptions: {
        tabBarLabel:"Comments",
        tabBarVisible: false
      }
    },
    PrivateProfile: {
      screen: PrivateProfile,
      navigationOptions: {
        tabBarLabel:"Profile",
      }
    }
  }
)

const AppContainer = createAppContainer(Navigator)

export default AppContainer
