import React from 'react';
import './About.css';
import Footer from "../Footer"
import Mymenu from "./Mymenu"

const About = (props) => {
  return (
    <section className="aboutTwittler">
      <div className="aboutTwittler__container">
        <div className="aboutTwittler__wrapper">
          <div className="aboutTwittler__detail">
            <p className="aboutTwittler__detailName">React Twittler Info</p>
          </div>
        </div>
      </div>
      <div className="aboutTwittler__content">
        <i className="fas fa-users"></i>
        <Mymenu />
      </div>
      <Footer />
    </section>
  );
};

export default About;
