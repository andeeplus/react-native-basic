import React, { Component } from 'react';
import { View, Text, Keyboard, Image, StyleSheet, Dimensions } from 'react-native';
import LoginForm from '../LoginForm'
import logo from '../../assets/images/logo.png'

const window = Dimensions.get('window');

class Login extends Component {

state = {
    keyboardState: false
}

componentWillMount () {
  this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
}

componentWillUnmount () {
  this.keyboardDidShowListener.remove();
  this.keyboardDidHideListener.remove();
}

_keyboardDidShow = () => {
  this.setState({
      keyboardState: true
  });
}

_keyboardDidHide = () => {
  this.setState({
      keyboardState: false
  });
}

goToRegister = () =>{
  this.props.navigation.navigate('Register')
}

  render () {
    const {keyboardState} = this.state
    return(

    <View style={styles.container}>
      <View style={styles.loginContainer}>
        {!keyboardState && <Image resizeMode="contain" style={styles.logo} source={logo} />}
      </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={this.props.navigation} loginAction/>
        </View>

        <Text 
        onPress={() => this.goToRegister()}
        style={styles.textAccount}>
        No tienes cuenta? Registrate aquí!
        </Text>
        <Text style={styles.textLegal}>Aviso Legal</Text>

    </View>
    )
  }
}

const footerCoordinates = {
  position: 'absolute',
  color: 'white',
  textAlign: 'center',
  fontSize: 15,
  width: window.width
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DBCD2',
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 200
  },
  textAccount:{
    ...footerCoordinates,
    bottom: 50,
    fontSize: 18
  },
  textLegal:{
    ...footerCoordinates,
    bottom: 10,
  }
})

export default Login;
