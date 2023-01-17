/* About component */

import React from "react";

import RestaurantImage from "../assets/restaurant.jpg";
import ChefsImage from "../assets/restaurant chef B.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <h2>About</h2>
          <p>
            Little Lemon Restaurant is a cozy and inviting eatery that
            specializes in fresh and flavorful Mediterranean cuisine. The menu
            features a variety of dishes made with locally sourced ingredients
            and traditional recipes. Whether you're in the mood for a light and
            healthy salad, a savory and satisfying pasta dish, or a delicious
            and hearty entree, Little Lemon has something to please every
            palate.
          </p>
        </div>
        <div className="image-container">
          <img src={ChefsImage} alt="Little Lemon Restaurant" />
          <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs" />
        </div>
      </div>
    </section>
  );
};

export default About;
