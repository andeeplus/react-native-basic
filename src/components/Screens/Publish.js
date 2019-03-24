import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import camera from '../../assets/icons/ic_camera_active.png'
import gallery from '../../assets/icons/ic_gallery.png'
const window = Dimensions.get('window');

class Publish extends Component {

  static navigationOptions = {
    title: 'Publicar'
  }
  
  openCamera = () => {
    //Code here
  }

  loadPhoto = () => {
    //Code here
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> 
          Para publicar tu post,{"\n"}
          ¡elige una imagen! 
        </Text>
        <TouchableOpacity style={styles.flexRowBorder} onPress={() => this.openCamera}>
          <Image source={camera} style={styles.icon}/>
          <Text style={styles.colorText}>Hacer Foto</Text>
        </TouchableOpacity>
        <View style={styles.lineEffect}>
          <View style={styles.line}/>
          <Text style={styles.centerText}> O bien </Text>
          <View style={styles.line}/>
        </View>
        <TouchableOpacity style={styles.flexRowBorder} onPress={() => this.loadPhoto}>
          <Image source={gallery} style={styles.icon}/>
          <Text style={styles.colorText}>Subir Foto </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const fatText = {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center'
}

const flexRowCenter = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const MAIN_COLOR = '#5DBCD2'


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40
  },
  text: {
    ...fatText,
    paddingBottom: 30
  },
  colorText: {
    color: MAIN_COLOR,
    ...fatText
  },
  flexRowBorder:{
    ...flexRowCenter,
    borderColor: MAIN_COLOR,
    borderWidth: 2,
    borderRadius: 5,
    padding: 30,
    margin: 30,
    height: 80
  },
  icon:{
    width: 40,
    height: 40,
    margin: 10
  },
  line:{
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: window.width / 4,
  },
  centerText:{
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'lightgrey',
    padding: 10,
    fontSize: 16
  },
  lineEffect:{
    ...flexRowCenter,
    padding: 30
  }
})

export default Publish;
