import React from "react";
import RestaurantFood from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon Restaurant is a cozy and inviting eatery that
            specializes in fresh and flavorful Mediterranean cuisine. The menu
            features a variety of dishes made with locally sourced ingredients
            and traditional recipes. Whether you're in the mood for a light and
            healthy salad, a savory and satisfying pasta dish, or a delicious
            and hearty entree, Little Lemon has something to please every
            palate.
          </p>
          <button>
            <Link to="booking">Reserve a table</Link>
          </button>
        </div>
        <img src={RestaurantFood} alt="Little Lemon Restaurant Food" />
      </div>
    </section>
  );
};

export default Hero;
