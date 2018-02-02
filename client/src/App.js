import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
// import Feed from './pages/Feed'
// import Explore from './pages/Explore'
import Login from './pages/Login'
// import Media from './pages/Media'
// import NoMatch from './pages/NoMatch'
// import SignUp from './pages/SignUp'
// import UserFriends from './pages/UserFriends'
// import UserLists from './pages/UserLists'
// import UserProfile from './pages/UserProfile'
// import UserShelf from './pages/UserShelf'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    )
  }
}

export default App;
