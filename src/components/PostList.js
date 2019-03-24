import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import like from '../assets/icons/ic_like_empty.png'
import likeFilled from '../assets/icons/ic_like_filled.png'
import comment from '../assets/icons/ic_comment.png'
import more from '../assets/icons/ic_more.png'
import location from '../assets/icons/ic_location.png'
import BruceMiller from './MockData/BruceMiller'

const window = Dimensions.get('window');

PostList = (props) => {

  goTo = (where, params) => {
    props.navigation.navigate(where, params)
  }
  return(
    <FlatList
    data={props.entries}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item, index}) => (
        <View style={styles.postContainer} key={item.id}>
        <View style={styles.profileInfo}>
          <TouchableOpacity 
            onPress={() => this.goTo('PublicProfile', {user:{...BruceMiller}})}>
            <Image source={item.profilePic} style={styles.profilePic} />
          </TouchableOpacity>
          <View style={styles.userline}>
            <Text style={styles.username}>{item.username}</Text> 
            <Text style={styles.nickname}>{item.nickname}</Text> 
          </View>
          <Text>{item.time}</Text>
        </View>
          <Image source={item.img} style={styles.img}/>
        <View style={styles.lineIcon}>
          <View style={styles.leftIcon}>
            <TouchableOpacity
              onPress={() =>  !props.privateArea && props.mockLikes(index)}>
              <Image source={item.likes <= 0 ? like : likeFilled} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.iconInfo}>{item.likes}</Text>
            <TouchableOpacity
              onPress={() => this.goTo('Comments', {comments:[...item.comments]})}>
              <Image source={comment} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.iconInfo}>{item.comments.length}</Text>
          </View>
            <TouchableOpacity>
              <Image source={more} style={styles.icon}/>
            </TouchableOpacity>
        </View>
        <View style={styles.postBlock}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View style={styles.lineIcon}>
          <View style={styles.leftIcon}>
            <Image source={location} style={styles.iconSmall}/>
            <Text style={styles.smallText}>{item.location}</Text>
          </View>
        </View>
      </View>
    )}/>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5DBCD2',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    maxHeight: 50,
  },
  postContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: window.width * 0.95,
  },
  profileInfo:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  profilePic:{
    width: 48,
    height: 48,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 50
  },
  userline:{
    flex: 1,
    flexDirection: 'column',
  },
  username:{
    color: 'black',
    fontSize: 16,
  },
  nickname:{
    fontSize: 16,
  },
  img:{
    width: window.width,
    height: window.height * 0.35,
  },
  icon:{
    width: 32,
    height: 32,
    marginLeft: 8,
    marginRight: 8
  },
  iconSmall:{
    width: 24,
    height: 24,
    marginLeft: 10,
    marginRight: 10
  },
  lineIcon:{
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: window.width
  },
  leftIcon:{
    flex: 1,
    flexDirection: 'row',
  },
  iconInfo:{
    lineHeight: 32,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postBlock:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  title:{
    fontSize: 20,
    color: 'black'
  },
  text:{
    fontSize: 16,
  },
  smallText:{
    fontSize: 14,
    lineHeight: 24
  }
})

export default PostList