import React from 'react';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';

class Contact extends React.Component {

  onClickPlay () {
    var clickSound = document.getElementById("clickSound");
    clickSound.volume = 0.6;
    clickSound.play();
  }

  render() {
    return (
    <div id="contact" className="rowContact">
      <div id="contact" className="row rowContact">
        <div id="contact-form-waiting">
          <form className="contactForm" id="contact-form">
            <div className="form-group">
              <input type="text" name="name" required="" className="form-control iconUser" placeholder="Name" />
            </div>
            <div className="form-group">
              <input required="" type="email" name="email" className="form-control iconEmail" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="check"> <span>In what service you are interested?</span>
            </div>
              <div className="checkbox checkbox-inline">
              <input name="options" value="App Development" id="checkbox1" className="styled" type="checkbox" />
              <label for="checkbox1"> App Development </label>
              </div>
              <div className="checkbox checkbox-inline">
              <input name="options" value="Web Designt" id="checkbox2" className="styled" type="checkbox" />
              <label for="checkbox2"> Web Design </label>
              </div>
              <div className="checkbox checkbox-inline">
                <input name="options" value="Graphic Design" id="checkbox3" className="styled" type="checkbox" />
                <label for="checkbox3"> Graphic Design </label>
              </div>
              <div className="checkbox checkbox-inline">
                <input name="options" value="SEO" id="checkbox4" className="styled" type="checkbox" />
                <label for="checkbox4"> SEO </label>
              </div>
            <div className="form-group">
              <textarea className="form-control iconPencil" name="text" cols="40" rows="5" required="" placeholder="Message" />
            </div>
            <p>
            <input className="form-control iconBudget" type="number" name="budget" required="" placeholder="Your budget" />
            </p>
            <button type="submit" className="btn btn-default btnGetStarted">Send</button>
            <p id="contact-form-fail"><span>An error occured.</span> </p>
        </form>
        </div>
      <div className="col-md-4" id="contact-form-success">
      <h2>Email sent.</h2> </div>
      </div>
    </div>
    );
  }
}

export default Contact;