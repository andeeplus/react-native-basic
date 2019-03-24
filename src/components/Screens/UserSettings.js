import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import camera from '../../assets/icons/ic_camera_white.png'

const window = Dimensions.get('window');
const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

class UserSettings extends Component {

  state = {
    isFocused: false,
    user: null,
    email: null,
    status: null,
    name: null,
    loaded: false
  };

  componentDidMount = () => {

    const {user} = this.props.navigation.state.params
    this.setState({
      user: user,
      email: user.userData.email, 
      name: user.userData.name,
      status: user.userData.status,
      loaded: true
    })
  }

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  
  render() {

    const { isFocused, email, name, status, loaded, user } = this.state;

    return (
      loaded &&
      <View style={styles.container}>
        { !isFocused &&     
          <React.Fragment>
          <View style={styles.imageBlock}>
            <Image source={user.userData.profilePic} style={styles.profilePic} blurRadius={10}/>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={this.followUser}>
              <Image source={camera} style={styles.iconEdit}/>
              <Text style={styles.iconText}>Cambiar Foto</Text>
            </TouchableOpacity>
          </View>
          </React.Fragment>
        }
          <View style={styles.inputContainer}>
            <Text>Nombre de usuario</Text>
              <TextInput
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onChangeText={(name) => this.setState({name})}
                value={name}
                onBlur={this.handleBlur}
                style={styles.textInput}
              />
            <Text>Correo electronico</Text>
              <TextInput
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onChangeText={(email) => this.setState({email})}
                value={email}
                onBlur={this.handleBlur}
                style={styles.textInput}
              />
            <Text>Estado</Text>
            <Text style={{ fontWeight: 'bold',fontSize: 24}}>
            ¡Dinos como eres!</Text>
              <TextInput
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onChangeText={(status) => this.setState({status})}
                value={status}
                onBlur={this.handleBlur}
                style={{...styles.textInput, marginTop:20}}
              />
              </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column'
  },
  imageBlock:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    width: window.width,

  },
  profilePic:{
    width: 200,
    height: 200,
    margin: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,

  },
  iconEdit:{
    width: 60,
    height: 60,
    marginLeft: 54,
    marginTop: 40
  },
  iconText:{
    color:'white',
    fontSize: 18,
    textAlign: 'center'
  },
  iconContainer:{
    position: 'absolute',
    right: (window.width / 2) - 100,
    top: 16,
    width: 200,
    height: 200,
    borderRadius: 75,
    padding: 15,
  },
  inputContainer:{
    padding: 20,
    marginBottom: 60,
  },
  textInput: {
    height: 60,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 14
  }
})

export default UserSettings;
