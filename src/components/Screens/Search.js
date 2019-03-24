import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import BruceMiller from '../MockData/BruceMiller'
import search from '../../assets/icons/ic_search.png'

const window = Dimensions.get('window');

class Search extends Component {

  state = {
    users: null,
    loaded: false,
    search:''
  }
  
  componentDidMount = () => {
    const followers = [...BruceMiller.followers]
    this.setState({
      users: followers,
      loaded: true
    })
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.userBlock}>
        <Image source={item.profilePic} style={styles.image}/>
          <View style={styles.userInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>{item.username}</Text>
          </View>
      </View>
    )
  }

  render() {
    const {loaded, users} = this.state
    console.log(users)
    return (
      loaded &&
      <React.Fragment>
      <View  style={styles.inputBox}>
        <TextInput 
          style={styles.input} 
          onChangeText={(search) => this.setState({search})}
          placeholder='Search...' 
        /> 
        <Image source={search} style={styles.searchIcon}/>
      </View>
        <FlatList
          data={users}
          style={styles.container}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}/>
      </React.Fragment>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  userBlock:{
    height: 100,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
  image:{
    width:60,
    height:60,
    marginRight: 10
  },
  userInfo:{
    flex:1,
    flexDirection: 'column'
  },
  name:{
    fontWeight:'bold',
    fontSize: 16,
  },
  username:{
    fontSize: 16
  },
  inputBox:{
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
  input:{
    height: 70,
    fontSize: 16,
    padding: 10,
    width: window.width * 0.85,
  },
  searchIcon:{
    position: 'absolute',
    top: 20,
    right: 5,
    width: 30,
    height: 30,
    marginRight: 10,
    opacity: 0.3
  },
})

export default Search;
