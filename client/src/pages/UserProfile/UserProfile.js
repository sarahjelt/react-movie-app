import React, { Component } from 'react';
import { UserHeader } from '../../components/UserHeader';
import { Avatar } from '../../components/Avatar';
import { UserInfo } from '../../components/UserInfo';
import { UserModules } from '../../components/UserModules';
import { Footer } from '../../components/Footer';
import API from '../../utils/API'

class UserProfile extends Component {
  state = {
    reviews:[],
    reviewMovie: "",
    reviewName: "",
    reviewBool: false,
    reviewValue: "",
    listName: "",
    listValue: "",
    listBool: false
  };

  componentDidMount() {
    console.log(this.props)
  };


  componentWillMount() {

  }

  // loadReviews = () => {
  //   API.getReviewsByUser()
  //     .then(res =>
  //       this.setState({ reviews: res.data }))
  // };
  
  //Adds Review to the Schema
  handleReviewSubmit= event => {
    event.preventDefault();
    console.log(this.state.reviewValue, this.state.reviewName);
      API.saveReview({
        headline: this.state.reviewName,
        author: "5a77a903dd1f581f28fbf335",
        mediaItem: "5a77a903dd1f581f28fbf335",
        body: this.state.reviewValue
      })
      .then(res => console.log('this happened', res));
  };

  //Adds Lists to the User Schema
  handleListSubmit= event => {
    event.preventDefault();
    console.log(this.state.listValue, this.state.listName);
    API.pushUserLists({ _id: '5a77a903dd1f581f28fbf335'},
      { $push:
        { lists: 
          { title: this.state.listName,
            body: this.state.listValue
          }
        }
      })
      .then(res => console.log('this happened', res));
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

  userHeaderArr =
    ['https://4.bp.blogspot.com/-SAWRO0xPu58/UCAy7Qfx3wI/AAAAAAAAK1Q/UrHXLDbO5LY/s1600/Kiki%27s+Delivery+Service+%281989%29+2.jpg',
      'https://www.movieposter.com/posters/archive/main/100/MPW-50006',
      'https://www.posterduniya.com/wp-content/uploads/2016/10/Rocky-Movie-Poster-Print.jpg',
      'http://starwarsblog.starwars.com/wp-content/uploads/2017/10/the-last-jedi-theatrical-blog.jpg'
    ]

  render() {
    return (
      <div>
        <UserHeader 
          headerItems={this.userHeaderArr}
        />
        <UserInfo />
        <Avatar 
          userImage='https://dw9to29mmj727.cloudfront.net/properties/2016/432-SeriesThumbnails_SM__400x320.jpg'
        />
        <UserModules 
                      reviewValue={this.state.reviewValue}
                      reviewBool={this.state.reviewBool}
                      reviewName={this.state.reviewName}
                      handleReviewSubmit={this.handleReviewSubmit}
                      reviewModalTrigger={this.reviewModalTrigger}
                      handleEventChange={this.handleEventChange}
                      listValue={this.state.listValue}
                      listName={this.state.listName}
                      listBool={this.state.listBool}
                      listModalTrigger={this.listModalTrigger}
                      handleListSubmit={this.handleListSubmit}
                      handleEventChange={this.handleEventChange}/>
        <Footer />
      </div>
    )
  }
};

export default UserProfile;