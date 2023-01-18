/* About component */

import React from "react";

import Restaurant from "../assets/restaurant.jpg";
import Chefs from "../assets/restaurant chef B.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <h2>About</h2>
          <p>
            Welcome to Little Lemon! We are a family-owned and operated
            restaurant that has been serving delicious food for over 10 years.
            Our menu features a variety of Mediterranean dishes made with the
            freshest ingredients and cooked to perfection. We also offer a
            selection of beverages.Our passion for good food and friendly
            service is what sets us apart. We take pride in creating a warm and
            welcoming atmosphere where you can enjoy a great meal with your
            loved ones. Our staff is dedicated to making your dining experience
            a memorable one. We are located in the heart of Chicago, making
            us the perfect spot for a casual dinner or a special occasion. We
            also offer catering services for events of all sizes.
            Thank you for choosing Little Lemon Restaurant and we hope to see you soon!
          </p>
        </div>
        <div className="image-container">
          <img src={Chefs} alt="Little Lemon Restaurant" />
          <img src={Restaurant} alt="Little Lemon Restaurant Chefs" />
        </div>
      </div>
    </section>
  );
};

export default About;
