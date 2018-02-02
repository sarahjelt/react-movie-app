import React, { Component } from 'react';
import { UserHeader } from '../../components/UserHeader';

class UserProfile extends Component {
  // state = {

  // };

  // componentDidMount() {

  // };

  userHeaderArr =
    ['https://4.bp.blogspot.com/-SAWRO0xPu58/UCAy7Qfx3wI/AAAAAAAAK1Q/UrHXLDbO5LY/s1600/Kiki%27s+Delivery+Service+%281989%29+2.jpg',
      'https://www.movieposter.com/posters/archive/main/100/MPW-50006',
      'https://www.posterduniya.com/wp-content/uploads/2016/10/Rocky-Movie-Poster-Print.jpg',
      'http://starwarsblog.starwars.com/wp-content/uploads/2017/10/the-last-jedi-theatrical-blog.jpg'
    ]

  render() {
    return (
      <UserHeader 
        headerItems={this.userHeaderArr}
      />
    )
  }
};

export default UserProfile;