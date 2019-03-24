import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput:'',
      passwordInput:'',
      userName: ''
    };
  }

  loginUser = () => {
    // Login Code Here
    this.props.navigation.navigate('FirstScreen')
  }

  registerUser = () => {
    // Register Code Here
    this.props.navigation.navigate('FirstScreen')
  }

  render() {
    const { loginAction } = this.props
    return(
      <View style = {styles.container} >
        <TextInput style = {styles.input} 
          onChangeText={(emailInput) => this.setState({emailInput})}
          keyboardType='email-address' 
          returnKeyType="next" 
          placeholder='Email' 
          placeholderTextColor='rgba(225,225,225,0.7)'/>

      { !loginAction && 
        <TextInput style = {styles.input}   
          returnKeyType="go" 
          onChangeText={(userName) => this.setState({userName})}
          placeholder='Nombre de Usuario' 
          placeholderTextColor='rgba(225,225,225,0.7)' 
          /> }
        
        <TextInput style = {styles.input}   
          returnKeyType="go" 
          onChangeText={(passwordInput) => this.setState({passwordInput})}
          placeholder='Contraseña' 
          placeholderTextColor='rgba(225,225,225,0.7)' 
          secureTextEntry/>

        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={loginAction ? () => this.loginUser() : () => this.registerUser()} >
          <Text  style={styles.buttonText}>{loginAction ? 'LOGIN': 'REGISTRATE'}</Text>
        </TouchableOpacity> 

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 80,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: window.height * 0.35
  },
  input:{
    height: 40,
    backgroundColor: '#0099aa',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    width: window.width * 0.9
  },
  buttonContainer:{
    backgroundColor: 'white',
    color: '#5DBCD2',
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    width: window.width * 0.9
  },
    buttonText:{
    color: '#5DBCD2',
    textAlign: 'center',
    fontWeight: '700'
  }
})

export default LoginForm;
