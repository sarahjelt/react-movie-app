import React, { Component } from 'react';
import { UserModules } from '../../components/UserModules';
import AuthService from '../../components/modules/AuthService';
import decode from 'jwt-decode';

class UserLists extends Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
    }

    state = {
        userLists: [],
        userEmail: '',
        userId: '',
        userName: ''
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
                userName: userInfo.name
            })
        }
    }


  render() {
    return (
      <div>
        <UserModules />
      </div>
    )
  }
};

export default UserLists;