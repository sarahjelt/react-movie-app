import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
// import Feed from './pages/Feed'
import Explore from './pages/Explore'
import Login from './pages/Login'
// import Media from './pages/Media'
import { NoMatch } from './pages/NoMatch/NoMatch'
import SignUp from './pages/SignUp'
// import UserFriends from './pages/UserFriends'
// import UserLists from './pages/UserLists'
import UserProfile from './pages/UserProfile'
// import UserShelf from './pages/UserShelf'
import { requireAuth } from './utils/AuthService'
import Callback from './components/Callback'

class App extends Component {
    state = {
        searchValue: ''
    }

    handleInputChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

  render() {
    return (
        <Router>
            <div>
                <Navbar
                    searchValue={this.state.searchValue}
                    handleInputChange={this.handleInputChange}
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/user" component={UserProfile} onEnter={requireAuth} />
                    <Route exact path="/explore" component={Explore} />
                    <Route path="/callback" component={Callback} />
                    <Route path="/explore/:query" component={Explore} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
  }
}

export default App;
