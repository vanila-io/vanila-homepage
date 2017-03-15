import React, {Component} from 'react';
import '../../public/styles/login.css'

export default class Login extends Component {

  render() {
      return (
        <div className="loginWrapper">
          <div className="left-container">
              <div className="container">
                  <div className="row">
                      <h1 className="title">
                          Login timeout Vanila.io
                          <b>
                              &nbsp;community&nbsp;
                          </b>
                          <div>and become big!</div>
                      </h1>
                      <h4 className="sub-title">
                          Sharpen your skills while working<br/>
                          on Cool projects, while you
                          <b>
                              &nbsp;learn, earn and make Friends.
                          </b>
                      </h4>
                  </div>
                  <div className="row rowLoginInput">
                  <div className="form col-md-6">
                      <label className="form-heading">Username</label>
                      <input type="text" name="username" autocomplete="username" value="username" placeholder="johny" onChange={(event) => FreelancerSignupStore.setUsername(event.target.value)}/>
                  </div>
                  <div className="form col-md-6">
                      <label className="form-heading">Password</label>
                      <input type="password" name="password" autocomplete="new-password" value="password" placeholder="password" onChange={(event) => FreelancerSignupStore.setPassword(event.target.value)}/>
                  </div>
                  </div>
                  <div className="row">
                    <div className="form col-md-12">
                      <button className="login-button">Login</button>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="rowSocialLogin">
                    <h4 className="sub-title">Or login via social media</h4>
                    <div className="form col-md-5">
                      <button className="btnLoginFb">
                        <img src={require('../../public/img/freelancerAssets/facebook.png')} />
                        Sign in with Facebook
                      </button>
                    </div>
                    <div className="col-md-2 text-center or">
                      or
                    </div>
                    <div className="form col-md-5">
                      <button className="btnLoginTw">
                        <img src={require('../../public/img/freelancerAssets/twitter.png')} />
                        Sign in with Twitter
                      </button>
                    </div>
                  </div>
                </div>
          </div>
          <div className="right-container">
              <div className="wizard-images">
                  <img src={require('../../public/img/freelancerAssets/freelancerAsset1.png')}/>
              </div>
          </div>
        </div>
      );
    }
}