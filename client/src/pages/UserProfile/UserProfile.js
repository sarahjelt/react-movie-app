import React, { Component } from 'react';
import { UserHeader } from '../../components/UserHeader';
import { Avatar } from '../../components/Avatar';
import { UserInfo } from '../../components/UserInfo';
import { UserModules } from '../../components/UserModules';
import API from '../../utils/API'
import AuthService from '../../components/modules/AuthService';
import decode from 'jwt-decode';

class UserProfile extends Component {

  constructor(props) {
      super(props);
      this.Auth = new AuthService();
  }

  state = {
    reviewMovie: "",
    reviewName: "",
    reviewBool: false,
    reviewValue: "",
    listName: "",
    listValue: "",
    listBool: false,
    lists: [],
    userEmail: '',
    userId: '',
    userName: '',
    shelf: [],
    recommendations: [],
    userImage: '',
    userHeaderArr: []
  };

  componentDidMount() {
    console.log('this.state after component mounted', this.state)
    this.loadUserLists()
    this.loadUserShelf()
    this.loadUserReviews()
  };

  componentWillMount() {
    let userInfo = this.Auth.getProfile();
    console.log(userInfo)

    if (!userInfo) {
      window.location.replace("/")
    } else {
      this.setState({
          userEmail: userInfo.email,
          userId: userInfo._id,
          userName: userInfo.name,
          userImage: userInfo.img
      })
    }
  }

  loadUserLists = () => {
      API.getUserLists(this.state.userId)
          .then(res => {
              console.log(res)
              if (res.data === null) {
                  return null;
              } else {
                  console.log(['getting user lists', res.data])
                  this.setState({
                      lists: res.data.lists
                  })
              }
          })
  }

  loadUserShelf = () => {
    API.getUserShelf(this.state.userId)
        .then(res => {
          console.log(res)
          if (res.data === null) {
            return null
          } else {
            console.log(['getting user shelf', res.data])
            this.setState({
                shelf: res.data.shelf
            })
            this.setUserHeaderArr(res.data.shelf)
          }
        })
  }

  loadUserReviews = () => {
    API.getUserReviews(this.state.userId)
        .then(res => {
          console.log(res)
          if (res.data === null) {
            return null
          } else {
            console.log(['getting user reviews', res.data])
            this.setState({
                recommendations: res.data
            })
          }
        })
  }

  //Adds Review to the Schema
  handleReviewSubmit = event => {
    event.preventDefault();
    console.log('HELLLLOOOOO')
    console.log(this.state.reviewValue, this.state.reviewName, this.state.reviewMovie);
    API.getMediaItemIdIfExists(this.state.reviewMovie)
    .then(res => {
        console.log([res.data.length === 0, res.data])
        if (res.data.length < 1) {
            console.log('this item does not exist in the db, so we should add it')
            API.addMediaItemToDB(this.state.reviewMovie)
               .then(response => {
                   API.getMediaItemIdIfExists(this.state.reviewMovie)
                       .then(res2 => {
                           let mediaItemId = res2.data[0]._id
                           console.log(['we added the item to the db and this is the new id for the mediaItem', mediaItemId])
                           API.saveReview({
                             headline: this.state.reviewName,
                             author: this.state.userId,
                             mediaItem: mediaItemId,
                             body: this.state.reviewValue
                           })
                           .then(res => console.log(res))
                       })
               })
        } else {
            console.log(['this item already exists in the db', res.data[0]._id])
            API.saveReview({
              headline: this.state.reviewName,
              author: this.state.userId,
              mediaItem: res.data[0]._id,
              body: this.state.reviewValue
            })
            .then(res => console.log(res))
        }
    })
  };

  //Adds Lists to the User Schema
  handleListSubmit= event => {
    event.preventDefault();
    console.log(this.state.listValue, this.state.listName);
    let newList = {title: this.state.listName, body: this.state.listValue}
    API.pushUserLists(this.state.userId, newList)
      .then(res => this.loadUserLists());
  };

  //Handles the inputs made to the modals
  handleEventChange = event => {
    const { name, value } = event.target;
    this.setState({
      [ name ] : value
    });
  };

  //These methods allow the Modals to open for their respective sections
  reviewModalTrigger = () => {
    this.setState({
      reviewBool: true
    });
  };

  listModalTrigger = () => {
    this.setState({
      listBool: true
    });
  };

  setUserHeaderArr = (shelf) => {
      if (shelf.length !== 0) {
          let headerImgArr = []
          for (let i = 0; i < shelf.length; i++) {
              headerImgArr.push(shelf[i].item.img)
          }
          this.setState({
              userHeaderArr: headerImgArr
          })
      } else {
          this.setState({
              userHeaderArr: ['https://4.bp.blogspot.com/-SAWRO0xPu58/UCAy7Qfx3wI/AAAAAAAAK1Q/UrHXLDbO5LY/s1600/Kiki%27s+Delivery+Service+%281989%29+2.jpg',
                      'https://www.movieposter.com/posters/archive/main/100/MPW-50006',
                      'https://www.posterduniya.com/wp-content/uploads/2016/10/Rocky-Movie-Poster-Print.jpg',
                      'http://starwarsblog.starwars.com/wp-content/uploads/2017/10/the-last-jedi-theatrical-blog.jpg'
                  ]
          })
      }
  }

  render() {
    return (
      <div>
        <UserHeader 
          headerItems={this.state.userHeaderArr}
        />
        <UserInfo
          userName={this.state.userName}
        />
        <Avatar 
          userImage={this.state.userImage !== '' ? this.state.userImage : 'https://dw9to29mmj727.cloudfront.net/properties/2016/432-SeriesThumbnails_SM__400x320.jpg'}
        />
        <UserModules 
          reviews={this.state.reviews}
          reviewValue={this.state.reviewValue}
          reviewBool={this.state.reviewBool}
          reviewName={this.state.reviewName}
          reviewMovie={this.state.reviewMovie}
          handleReviewSubmit={this.handleReviewSubmit}
          reviewModalTrigger={this.reviewModalTrigger}
          handleEventChange={this.handleEventChange}
          listValue={this.state.listValue}
          listName={this.state.listName}
          listBool={this.state.listBool}
          listModalTrigger={this.listModalTrigger}
          listResultName={this.state.listResultName}
          listResultBody={this.state.listResultBody}
          handleListSubmit={this.handleListSubmit}
          lists={this.state.lists}
          recommendations={this.state.recommendations}
          shelf={this.state.shelf}
        />
      </div>
    )
  }
};

export default UserProfile;