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
    reviewBody: "i'm a body",
    reviewMovie: "I'm a movie",
    reviewTitle: "I'm a title",
    mediaItem: "",
    reviewBool: false,
    reviewValue: "I'm a value"
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

  handleReviewSubmit= event => {
    event.preventDefault();
    console.log("submitted");
    if (this.state.reviewBody && this.state.reviewMovie && this.state.reviewTitle) {
      API.saveReview({
        headline: this.state.reviewTitle,
        author: '5a7bac9b921252711d2e794a',
        mediaItem: '5a7bac9b921252711d2e794a',
        body: this.state.reviewBody
      })
       .then(res => console.log(res))
    }
  };

  handleReviewChange = event => {
    const { value } = event.target;
    this.setState({
      reviewValue : value
    });

  };

  reviewModalTrigger = () => {
    this.setState({
      reviewBool: true
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
                      value={this.state.reviewValue}
                      reviewBool={this.state.reviewBool}
                      handleReviewSubmit={this.handleReviewSubmit}
                      reviewModalTrigger={this.reviewModalTrigger}
                      handleReviewChange={this.handleReviewChange} />
        <Footer />
      </div>
    )
  }
};

export default UserProfile;