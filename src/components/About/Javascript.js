import React from 'react';
import sr, {leftConf, rightConf} from '../sr';

class Javascript extends React.Component {
  componentDidMount() {
    sr.reveal(".enterRight-js",rightConf,80);
    sr.reveal(".enterLeft-js",leftConf,80);
  }
  render() {
    return (
      <div className="aboutJavascript">
        <div className="row">
        <div className="container">
          <div className="col-md-6 aboutJavascript-img onlyDesktop"><img className="enterLeft-js" src={require('../../../public/img/homeAssets/js-dev.png')} /></div>
          <div className="col-md-6 aboutJavascript-txt">
            <h2 className="enterRight-js"><strong>Power of JavaScript</strong></h2>
            <p className="enterRight-js">One code everywhere. You don't need to hire Web, IOS & <br></br>Android developers to have both Web and Mobile experience.</p>
             <br></br>
            <p className="enterRight-js">Using power of JavaScript and technologies like React Native, <br></br>Meteor.js, you will cover your mobile app development needs.</p>
          </div>
          <div className="col-md-6 aboutJavascript-img onlyMobile"><img className="enterLeft-js" src={require('../../../public/img/homeAssets/js-dev.png')} /></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Javascript;
