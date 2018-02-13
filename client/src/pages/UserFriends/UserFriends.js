import React, { Component } from 'react';
import {FriendCard} from '../../components/FriendCard';
import {Input} from '../../components/Input'
import {SmallFriendContainer} from "../../components/SmallFriendContainer";
import AuthService from '../../components/modules/AuthService';
import decode from 'jwt-decode';
import API from '../../utils/API'

class UserFriends extends Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
    }

  state = {
    userSearchInput: '',
    userFriends: [],
    userSearchResults: [],
    userEmail: '',
    userId: '',
    userName: '',
    hasSearched: false,
  };

  componentWillMount() {
      let userInfo = this.Auth.getProfile();
      console.log(userInfo)

      if (!userInfo) {
          window.location.assign("/")
      } else {
          this.setState({
              userEmail: userInfo.email,
              userId: userInfo._id,
              userName: userInfo.name,
          })
      }
  }

  componentDidMount() {
      this.loadUserFriends(this.state.userId)
  }

  loadUserFriends = (userId) => {
      API.getUserFriends(userId)
          .then(res => {
              let userCurrentFriends = []
              if (res.data.friends.length !== 0) {
                  for (let i = 0; i < res.data.friends.length; i++) {
                      let friendData = {
                          img: res.data.friends[i].img,
                          name: res.data.friends[i].name
                      }
                      userCurrentFriends.push(friendData)
                  }
                  this.setState({
                      userFriends: userCurrentFriends
                  })
              }
          })
  }

  handleInputChange = (event, inputName) => {
      this.setState({
          [inputName]: event.target.value
      })
  }

  handleButtonPress = (value, buttonName) => {
      console.log(['you searched for', this.state.userSearchInput])
      API.findUserByName(this.state.userSearchInput)
          .then(res => {
              let searchResults = []

              if (res.data.length !== 0) {
                  for (let i = 0; i < res.data.length; i++) {
                      let userData = {
                          img: res.data[i].img,
                          name: res.data[i].name,
                          id: res.data[i]._id
                      }
                      searchResults.push(userData)
                  }
                  this.setState({
                      userSearchResults: searchResults,
                      hasSearched: true,
                      userSearchInput: '',
                  })
              } else {
                  this.setState({
                      hasSearched: true,
                      userSearchInput: ''
                  })
              }
          })
  }

  handleAddFriendButtonPress = (id) => {
      console.log('adding this friend id', id)
      API.addUserToFriends(this.state.userId, id)
          .then(res => this.loadUserFriends(this.state.userId))
  }

  renderUserSearchResults = (props, userSearchResults) => {
        if (userSearchResults.length !== 0 && this.state.hasSearched) {
            return (
                userSearchResults.map((friend, index) => (
                    <FriendCard
                        name={friend.username}
                        img={friend.img}
                        id={friend.id}
                        key={friend.id}
                        handleAddFriendButtonPress={this.handleAddFriendButtonPress}
                    />
                ))
            )
        } else if (userSearchResults.length === 0 && this.state.hasSearched) {
            return (
                <h4>No users were found matching that name.</h4>
            )
        } else if (!this.state.hasSearched) {
            return (
                <h4>Search to connect.</h4>
            )
        }
    }

  render() {
    return (
      <div className='row' style={Style.container}>
        <div className='col s12 m3'>
          <SmallFriendContainer
            userFriends={this.state.userFriends}
          />
        </div>
        <div className="col s12 m9" style={Style.searchContainer}>
          <div style={Style.inputContainer}>
            <Input
                style={Style.input}
                inputType='text'
                inputName='userSearchInput'
                inputLabel='Search for friends:'
                placeholder='search for friends...'
                handleInputChange={this.handleInputChange}
            />
            <a onClick={() => this.handleButtonPress()} style={Style.searchButton} className="waves-effect waves-light btn"><i className="material-icons left">search</i>search</a>
          </div>
          <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 70, "gutter": 10 }' style={Style.gridContainer}>
            {this.renderUserSearchResults(this.props, this.state.userSearchResults)}
          </div>
        </div>
      </div>
    )
  }
};

const Style = {
  container: {
    width: '84%',
    marginRight: '8%',
    marginLeft: '8%',
    marginTop: '40px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexShrink: 10,
    marginBottom: '35px',
    marginRight: '20px',
  },
  searchButton: {
    flexShrink: 1,
    width: '25%',
    marginLeft: '20px',
    backgroundColor: '#46acc1',
  },
  gridContainer: {
    marginLeft: '40px'
  }
}

export default UserFriends;