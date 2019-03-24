import React, { Component } from 'react';
import PostList from '../PostList'
import BruceMiller from '../MockData/BruceMiller'

class FirstScreen extends Component {
  
  state = {entries:null}

  componentDidMount(){
    this.setState({entries:[...BruceMiller.entries]})
  }

  mockLikes = (index) => {
    const {entries} = this.state
    const newEntries = [...entries]
    newEntries[index].likes++
    this.setState({entries: newEntries})
  }


  render() {

    const {entries} = this.state

    return (
      <React.Fragment>
        <PostList entries={entries} mockLikes={this.mockLikes} navigation={this.props.navigation}/>
      </React.Fragment>
    );
  }
}


export default FirstScreen;
