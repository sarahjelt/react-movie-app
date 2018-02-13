import React, { Component } from 'react';
import { UserHeader } from '../../components/UserHeader';
import { Avatar } from '../../components/Avatar';
import { UserInfo } from '../../components/UserInfo';
import { UserModules } from '../../components/UserModules';
import API from '../../utils/API'
import AuthService from '../../components/modules/AuthService';
import decode from 'jwt-decode';
import Materialize from 'materialize-css';

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
    userHeaderArr: [],
    profileId: '',
    isOwnProfile: false,
    expandedReviewTitle: '',
    expandedReviewBody: '',
    expandedReviewModalVisible: false,
  };

  componentDidMount() {
    this.loadUserLists()
    this.loadUserShelf()
    this.loadUserReviews()
  };

  componentWillMount() {
    let userInfo = this.Auth.getProfile();
    if (!userInfo) {
      window.location.assign("/")
    } else {

      this.setState({
          userEmail: userInfo.email,
          userId: userInfo._id,
          userName: userInfo.name,
          userImage: userInfo.img
      })
      this.setUserIdParamsFromMatch(this.props)
    }
  }

    setUserIdParamsFromMatch = (props) => {
      let currentProfileId = props.match.params.id !== undefined ? props.match.params.id : null
      if (currentProfileId === null || currentProfileId === this.state.userId) {
          this.setState({
              profileId: currentProfileId,
              isOwnProfile: true,
          })
      } else {
          API.findUserById(currentProfileId)
              .then(res => {
                  this.setState({
                      profileId: currentProfileId,
                      isOwnProfile: false,
                      profileImg: res.data.img,
                      profileName: res.data.name
                  })
                  this.loadUserLists()
                  this.loadUserReviews()
                  this.loadUserShelf()
              })
      }
    }

  loadUserLists = () => {
      let profileTarget = this.state.isOwnProfile ? this.state.userId : this.state.profileId

      API.getUserLists(profileTarget)
          .then(res => {
              if (res.data === null) {
                  return null;
              } else {
                  this.setState({
                      lists: res.data.lists
                  })
              }
          })
  }

  loadUserShelf = () => {
      let profileTarget = this.state.isOwnProfile ? this.state.userId : this.state.profileId

      API.getUserShelf(profileTarget)
        .then(res => {
          if (res.data === null) {
            return null
          } else {
            this.setState({
                shelf: res.data.shelf
            })
            this.setUserHeaderArr(res.data.shelf)
          }
        })
  }

  loadUserReviews = () => {
      let profileTarget = this.state.isOwnProfile ? this.state.userId : this.state.profileId

      API.getUserReviews(profileTarget)
        .then(res => {
          if (res.data === null) {
            return null
          } else {
            this.setState({
                recommendations: res.data
            })
          }
        })
  }

  //Adds Review to the Schema
  handleReviewSubmit = event => {
    event.preventDefault();
      API.saveReview({
        headline: this.state.reviewName,
        author: this.state.userId,
        body: this.state.reviewValue
      })
      .then(res => {
        this.loadUserReviews();
        this.setState({ reviewBool: false });
        Materialize.toast('Review Added!', 4000);
      });
  };

  //Adds Lists to the User Schema
  handleListSubmit= event => {
    event.preventDefault();
    let newList = {title: this.state.listName, body: this.state.listValue}
    API.pushUserLists(this.state.userId, newList)
      .then(res => {
        this.loadUserLists();
        this.setState({ listBool: false });
        Materialize.toast('List Added!', 4000);
      });
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

  openExpandedReviewModal = (title, body) => {
      console.log(['trying to open the review modal', title, body])
      this.setState({
          expandedReviewTitle: title,
          expandedReviewBody: body,
          expandedReviewModalVisible: true
      })
  }

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
          userName={this.state.isOwnProfile ? this.state.userName : this.state.profileName}
        />
        <Avatar 
          userImage={this.state.userImage !== '' && this.state.isOwnProfile ? this.state.userImage : this.state.profileImg}
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
          isOwnProfile={this.state.isOwnProfile}
          expandedReviewTitle={this.state.expandedReviewTitle}
          expandedReviewBody={this.state.expandedReviewBody}
          expandedReviewModalVisible={this.state.expandedReviewModalVisible}
          openExpandedReviewModal={this.openExpandedReviewModal}
        />
      </div>
    )
  }
};

export default UserProfile;