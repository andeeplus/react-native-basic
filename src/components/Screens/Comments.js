import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import send from '../../assets/icons/ic_send.png'

const window = Dimensions.get('window');

class Comments extends Component {

  static navigationOptions = {
    tabBarVisible: false
  }

  constructor(props) {
    super(props);
    this.state = {
      comment:''
    };
  }

  sendMessage = () => {
    // Code here
  }

  renderItem = ({item, index}) =>{
    return (
      <View style={styles.commentBlock} key={index}>
        <Image source={item.profilePic} style={styles.image}/>
        <View style={styles.comment}>
          <View style={styles.topLine}>
            <Text style={styles.userName}>{item.user}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <Text>{item.comment}</Text>
        </View>
      </View>
    )
  }

  render() {
    

    return (
      <React.Fragment>
        {
          this.props.navigation.state.params.comments 
          ? <FlatList
          data={this.props.navigation.state.params.comments}
          style={styles.container}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}/>
          : <Text>No Comments Yet</Text>        
        }
        <View style={styles.borderTop}>
          <TextInput 
            style={styles.input} 
            returnKeyType="go"
            onChangeText={(comment) => this.setState({comment})}
            placeholder='Escribe un Comentario...' 
          /> 
          <TouchableOpacity style={styles.sendButton} onPress={() => this.sendMessage}>
            <Image style={styles.sendImage} source={send}  />
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  commentBlock:{ 
    color: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    alignSelf: 'stretch'
  },
  image:{
    width:60,
    height:60,
    marginRight: 10
  },
  comment: {
    flex: 1,
    flexDirection: 'column'
  },
  topLine:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName:{
    fontWeight:'bold',
    fontSize: 16,
    color: 'black',
  },
  time:{
    fontSize: 12,
    position: 'absolute',
    right: 10,
  },
  borderTop:{
    borderTopColor: 'lightgrey',
    borderTopWidth: 1
  },
  input:{
    height: 70,
    fontSize: 16,
    padding: 10,
    width: window.width * 0.85
  },
  sendButton:{
    position: 'absolute',
    top: 20,
    right: 5,
    marginRight: 10,
  },
  sendImage:{
    width: 30,
    height: 30,
    opacity: 0.3
  }
})

export default Comments;
