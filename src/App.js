import React, { Component, useState } from 'react';
import LoginScreen from './components/login_screen/loginScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import VoiceLogin from './components/voice_login/voiceLogin';

const App = () => {
  const [loggedIn, changeLoggedIn] = useState(0);

  const toggleLoggedIn = () => changeLoggedIn(!loggedIn);

  // class App extends Component {
  // render() {
  // return <LoginScreen />;
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" render={props => <LoginScreen {...props} togLog={toggleLoggedIn} />} />
          <Route exact path="/voice_login" render={props => <VoiceLogin {...props} togLog={toggleLoggedIn} />} />
          <Route exact path="/" render={props => <Dashboard {...props} togLog={toggleLoggedIn} />} />
        </Switch>
      </div>
    </Router>
  );
  // }
};

export default App;
