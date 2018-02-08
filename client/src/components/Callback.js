import React, { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    console.log("TEST !-2-3!")
    window.location.href = "/user";
  }

  render() {
    return null;
  }
}

export default Callback;