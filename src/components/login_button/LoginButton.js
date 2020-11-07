import React from 'react';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLoggedIn = () =>
    this.setState(state => {
      return { isLoggedIn: !state.isLoggedIn };
    });

  onSignIn = googleUser => {
    // this.toggleLoggedIn();
    this.props.togLog();

    let user = googleUser.getBasicProfile();
    let id_token = googleUser.getAuthResponse().id_token;

    localStorage.setItem('token', id_token);
    this.props.togLog();

    console.log('google user obj', user);
    console.log('google_id_token', id_token);
    this.props.history.replace('/');
    // plus any other logic here
  };

  renderGoogleLoginButton = () => {
    console.log('rendering google signin button');
    window.gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 250,
      height: 40,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSignIn
    });
  };

  logout = () => {
    console.log('in logout');

    let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
    if (auth2) {
      auth2
        .signOut()
        .then(() => {
          this.props.togLog();
          // this.toggleLoggedIn();
          console.log('Logged out successfully');
        })
        .catch(err => {
          console.log('Error while logging out', err);
        });
    } else {
      console.log('error while logging out');
    }
  };

  componentDidMount() {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton);
    window.gapi && this.renderGoogleLoginButton();
  }

  render() {
    // noinspection CheckTagEmptyBody
    return (
      <>
        <div id="my-signin2"></div>
      </>
    );
  }
}

export default LoginButton;
