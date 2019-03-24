import React from 'react'
import { Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Login from './src/components/Screens/Login'
import FirstScreen from './src/components/Screens/FirstScreen'
import Register from './src/components/Screens/Register'
import Comments from './src/components/Screens/Comments'
import PrivateProfile from './src/components/Screens/PrivateProfile'
import PublicProfile from './src/components/Screens/PublicProfile'
import UserSettings from './src/components/Screens/UserSettings'
import Search from './src/components/Screens/Search'
import Publish from './src/components/Screens/Publish'
import Notifications from './src/components/Screens/Notifications'

import home from './src/assets/icons/ic_home.png'
import user from './src/assets/icons/ic_user.png'
import search from './src/assets/icons/ic_search.png'
import camera from './src/assets/icons/ic_camera.png'
import bell from './src/assets/icons/ic_notifications.png'

const headerDefault = {
  headerStyle: {
    backgroundColor: '#5DBCD2',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    textAlign:"center", 
    flex:1,
    fontWeight: 'bold',
  },
  headerTitleContainerStyle: {
    left: 0, // THIS RIGHT HERE
  }
}

const initStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarVisible: false,
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      tabBarVisible: false,
      header: null
    }
  }
})


const homeStack = createStackNavigator({ 
  FirstScreen: {
    screen: FirstScreen,
    navigationOptions: {
      title: 'Inicio',
      ...headerDefault
    }
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      title: 'Comentarios',
      tabBarVisible: false,
      ...headerDefault
    }
  },
  PublicProfile: {
    screen: PublicProfile,
    navigationOptions: {
      ...headerDefault
    }
  }
});

const searchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Buscar',
      ...headerDefault
    }
  }
})

const publishStack = createStackNavigator({
  Publish: {
    screen: Publish,
    navigationOptions: {
      title: 'Publicar',
      ...headerDefault
    }
  }
})

const notificationsStack = createStackNavigator({
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notificaciones',
      ...headerDefault
    }
  }
})

const profileStack = createStackNavigator({
  PrivateProfile: {
    screen: PrivateProfile,
    navigationOptions: {
      ...headerDefault
    }
  },
  UserSettings: {
    screen: UserSettings,
    navigationOptions: {
      title: 'Editar',
      tabBarVisible: false,
      ...headerDefault
    }
  },
})


homeStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'Comments' ) {
      tabBarVisible = false
  }
  return {
      tabBarVisible,
  }
}

profileStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'UserSettings' ) {
      tabBarVisible = false
  }
  return {
      tabBarVisible,
  }
}


const tabNavigator = createBottomTabNavigator({

  Home: {
    screen: homeStack,
    navigationOptions: {
    title: 'Inicio',
    tabBarIcon: () => (<Image source={home} style={styles.icon}/>)}
  },
  Profile: {
    screen: profileStack,
    navigationOptions: {
    title: 'Perfil',
    tabBarIcon: () => (<Image source={user} style={styles.icon}/>)}
  },
  Search: {
    screen: searchStack,
    navigationOptions: {
    title: 'Buscar',
    tabBarIcon: () => (<Image source={search} style={styles.icon}/>)}
  },
  Publish: {
    screen: publishStack,
    navigationOptions: {
    title: 'Publicar',
    tabBarIcon: () => (<Image source={camera} style={styles.icon}/>)}
  },
  Notifications: {
    screen: notificationsStack,
    navigationOptions: {
    title: 'Notificaciones',
    tabBarIcon: () => (<Image source={bell} style={styles.icon}/>)}
  }
},    
{ 
  initialRouteName : "Home",
  order: ['Home','Search','Publish','Notifications','Profile'],
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    activeBackgroundColor: 'white'
  },
}
);

const rootNavigator = createSwitchNavigator({
  SignedIn:{screen: tabNavigator},
  SignedOut:{screen: initStack}
},{
  initialRouteName: 'SignedOut'
}
)


const AppContainer = createAppContainer(rootNavigator)

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  }
})

export default AppContainer
