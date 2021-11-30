import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    
    return (
      <section style={{background: "#06082d"}} id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img style={{width: "75%", height: "80%"}}
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
