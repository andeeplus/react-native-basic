import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import PostList from './PostList'
import edit from '../assets/icons/ic_edit.png'
import follow from '../assets/icons/ic_follow.png'


const window = Dimensions.get('window');

class Profile extends Component {

  state = { 
    user: null,
  }

  componentDidMount = () => {
    const {user} = this.props
    this.setState({user: user})
  };
  
  followUser = () => {
    //Code here
  }

  render() {

    const {user} = this.state
    const {privateArea} = this.props
    
    return (
      
      user &&

      <ScrollView>
      <View style={styles.container}>

        <View style={styles.userFullBlock}>

          <View style={styles.imageBlock}>
            <Image source={user.userData.profilePic} style={styles.profilePic}/>
          </View>

          <View style={styles.iconContainer}>
            { privateArea ?
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('UserSettings', {user})}>
                  <Image source={edit} style={styles.iconEdit} />
                </TouchableOpacity>
              : <TouchableOpacity
                  onPress={this.followUser}>
                  <Image source={follow} style={styles.iconEdit} />
                </TouchableOpacity>
            }
          </View>

          <View style={styles.userDetail}>
            <View>
              <Text style={styles.username}>{user.userData.name}</Text>
              <Text style={styles.status}>{user.userData.status}</Text>
            </View>
          </View>

          <View style={styles.userInfoBlock}>
            <View>
              <Text style={styles.infoDetail}>{user.userData.followers}</Text>
              <Text>FOLLOWERS</Text>
            </View>
            <View>
              <Text style={styles.infoDetail}>{user.userData.posts}</Text>
              <Text>POSTS</Text>
            </View>
            <View>
              <Text style={styles.infoDetail}>{user.userData.following}</Text>
              <Text>FOLLOWING</Text>
            </View>
          </View>

        </View>

          <View style={styles.postContainer}>
            <PostList entries={user.entries} navigation={this.props.navigation} privateArea={privateArea ? true : false}/>
          </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  userFullBlock:{
    flex:1,
    height: 200,
    flexDirection:'column',
    width: window.width
  },
  imageBlock:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profilePic:{
    width: 120,
    height: 120,
    margin: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 60
  },
  iconEdit:{
    width: 20,
    height: 20,
  },
  iconContainer:{
    position: 'absolute',
    top: 105,
    right: (window.width / 2 ) - 50,
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 5,
    width: 30,
    height: 30,
    backgroundColor: '#3e90a3'
  },
  userDetail:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 155
  },
  username:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  status:{
    fontSize: 16,
    textAlign: 'center'
  },
  userInfoBlock:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingTop: 60,
    width: window.width
  },
  infoDetail:{
    textAlign:'center',
    fontSize: 18,
    color: '#5DBCD2'
  },
  postContainer:{
    marginTop: 70,
    width: window.width,
    justifyContent: 'space-between',
    borderTopColor: '#5DBCD2',
    borderTopWidth: 1,
  }
})

export default Profile;
