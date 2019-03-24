import React, { Component } from 'react';
import Profile from '../Profile'
import BruceMiller from '../MockData/BruceMiller'

class PrivateProfile extends Component {

  static navigationOptions = {
    title: 'Perfil'
  }

  state = {user: null};
  
  componentDidMount = () =>{
    this.setState({user: {...BruceMiller}})
  }

  render() {

    const {user} = this.state

    return(
      user &&
      <Profile 
        user={user} 
        navigation={this.props.navigation} 
        privateArea={true} />
    )
  }

}

export default PrivateProfile
