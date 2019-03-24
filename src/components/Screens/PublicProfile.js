import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Profile from '../Profile'


class PublicProfile extends Component {

  static navigationOptions = ({navigation}) => 
  ({ title: navigation.state.params.user.userData.name})
  

  state = {user: null};
  
  componentDidMount = () =>{
    this.setState({user: {...this.props.navigation.state.params.user}})
  }
  
  render() {

    const {user} = this.state

    return(
      user &&
      <Profile 
        user={user} 
        navigation={this.props.navigation} 
        privateArea={false} />
    )
  }

}

export default PublicProfile
