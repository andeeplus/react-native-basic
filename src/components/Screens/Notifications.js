import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList, Dimensions, Button } from 'react-native';
import BruceMiller from '../MockData/BruceMiller'
import search from '../../assets/icons/ic_search.png'

const window = Dimensions.get('window');

class Notifications extends Component {

  state = {
    notifications: null,
    loaded: false,
    search:''
  }
  
  componentDidMount = () => {
    const notifications = [...BruceMiller.notifications]
    this.setState({
      notifications,
      loaded: true
    })
  }

  followUser = () =>{
    //Code Here
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.userBlock}>
        <Image source={item.profilePic} style={styles.image} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{item.user}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        {item.action === 'NEW_FOLLOWER' 
          ? <Button
            onPress={() => this.followUser}
            title="Seguir"
            color='#5DBCD2'
            accessibilityLabel="Learn more about this purple button"
            />
          : <Image source={item.image} style={styles.image}/>
        }
      </View>
    )
  }

  render() {
    const {loaded, notifications} = this.state

    return (
      loaded &&
      <React.Fragment>
        <FlatList
          data={notifications}
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
    padding: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
  image:{
    width:60,
    height:60
  },
  userInfo:{
    flex:1,
    flexDirection: 'column',
    marginLeft: 10
  },
  name:{
    fontWeight:'bold',
    fontSize: 16,
  },
  username:{
    fontSize: 16
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

export default Notifications;
