import React, { Component } from 'react';
import {FriendCard} from '../../components/FriendCard';
import {Input} from '../../components/Input'
import {SmallFriendContainer} from "../../components/SmallFriendContainer";

class UserFriends extends Component {
  state = {
    userSearchInput: '',
    userFriends: [],
    userSearchResults: []
  };

  componentWillMount() {
    this.setState({
        userSearchResults: [
            {
                username: 'Catslug',
                img: 'https://i.pinimg.com/736x/48/e1/5f/48e15fc94fd3acb71afe3cc958ea6db6.jpg'
            }, {
                username: 'PrincessBear',
                img: 'http://payload289.cargocollective.com/1/2/66131/8080627/herop-copy_860.jpg'
            }, {
                username: 'SailorDoom',
                img: 'https://i.pinimg.com/originals/ab/b0/9a/abb09a6f77f47d9877c7e09ea18c0969.jpg'
            }, {
                username: 'Moonicorn',
                img: 'https://cdn.shopify.com/s/files/1/1307/5347/products/Screen_Shot_2017-04-19_at_8.18.16_pm.png?v=1492598993'
            }, {
                username: 'WitchesHex',
                img: 'https://img.etsystatic.com/il/9a1884/1414657676/il_fullxfull.1414657676_dkii.jpg'
            }, {
                username: 'TrashPanda',
                img: 'http://i.imgur.com/vAH0fOa.jpg'
            }, {
                username: 'QueenOfTrashHeaps',
                img: 'https://ih0.redbubble.net/image.191992670.6757/flat,800x800,070,f.u1.jpg'
            }
        ],
        userFriends: [
            {
                username: 'Catslug',
                img: 'https://i.pinimg.com/736x/48/e1/5f/48e15fc94fd3acb71afe3cc958ea6db6.jpg'
            }, {
                username: 'PrincessBear',
                img: 'http://payload289.cargocollective.com/1/2/66131/8080627/herop-copy_860.jpg'
            }, {
                username: 'SailorDoom',
                img: 'https://i.pinimg.com/originals/ab/b0/9a/abb09a6f77f47d9877c7e09ea18c0969.jpg'
            }, {
                username: 'Moonicorn',
                img: 'https://cdn.shopify.com/s/files/1/1307/5347/products/Screen_Shot_2017-04-19_at_8.18.16_pm.png?v=1492598993'
            }, {
                username: 'WitchesHex',
                img: 'https://img.etsystatic.com/il/9a1884/1414657676/il_fullxfull.1414657676_dkii.jpg'
            }, {
                username: 'TrashPanda',
                img: 'http://i.imgur.com/vAH0fOa.jpg'
            }, {
                username: 'QueenOfTrashHeaps',
                img: 'https://ih0.redbubble.net/image.191992670.6757/flat,800x800,070,f.u1.jpg'
            }
        ]
    })
      // API call to get user's friends and put into the array
  };

  handleInputChange = (event, inputName) => {
      this.setState({
          [inputName]: event.target.value
      })
  }

  handleButtonPress = (value, buttonName) => {
      console.log(['you searched for', this.state.userSearchInput])

  }

  renderFriendsList = (props, userFriends) => {
        if (userFriends.length !== 0) {
            return (
                userFriends.map((friend, index) => (
                    <FriendCard
                        username={friend.username}
                        img={friend.img}
                        key={index}
                    />
                ))
            )
        } else {
            return (
                <h1>You don't have any friends yet! Search to connect.</h1>
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
            <a style={Style.searchButton} className="waves-effect waves-light btn"><i className="material-icons left">search</i>search</a>
          </div>
          <div className="grid" style={Style.gridContainer}>
            {this.renderFriendsList(this.props, this.state.userSearchResults)}
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