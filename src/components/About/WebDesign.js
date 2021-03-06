import React from 'react';

class WebDesign extends React.Component {
  render() {
    return (
      <div className="aboutWebDesign">
        <div className="row">
        <div className="container">
          <div className="col-md-6 aboutWebDesign-txt">
            <h2 className="enterLeft-des"><strong>Web Design & Logos</strong></h2>
            <p className="enterLeft-des">Vanila design team is highly experienced in creating unique and <br></br>modern design.</p>
             <br></br>
            <p className="enterLeft-des">We will define your brand with the right details and make it <br></br>outstanding and memorable.</p>
             <br></br>
            <p className="enterLeft-des">Also, we believe that beauty is in personal touch, giving your brand <br></br>
            your personality. So, dream as big as you wish, because we are design ninjas!</p>
          </div>
          <div className="col-md-6 aboutWebDesign-img"><img className="enterRight-des" src={'../../img/homeAssets/web-design.webp'} /></div>
        </div>
        </div>
      </div>
    );
  }
}

export default WebDesign;
