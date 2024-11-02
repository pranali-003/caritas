import React from "react";
import "./hero.css";
import Card from "../card/Card";
import data from "./data.json";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">  
        <h1 className="hero-heading">"Small Gifts, Big Impacts!"</h1>{" "}
        <p>
          Your contribution, no matter how small, can create a ripple effect of
          positive change in the lives of those in need. Every donation helps us
          support various initiatives aimed at uplifting communities and
          providing essential resources.
        </p>
        {/* <p>Join us in making a difference! Your generosity can empower individuals, support education, improve health, and foster sustainable development. Together, we can create a brighter future for those who rely on our support.</p> <p>By choosing to give, you're not just making a donation; you're becoming a part of a larger mission to transform lives. Let's work hand in hand to build a world where everyone has the opportunity to thrive!</p> */}
      </div>
      
      <div className="money-donation-heading">Here are some Ngo that require Monetary Funds</div>
      <div className="money-donation">
        {data.map((ngo) => (
          <Card
            key={ngo.id}
            image={ngo.image}
            title={ngo.ngoName}
            subtitle={ngo.description}
            additionalInfo={ngo.additionalInfo}
          />
        ))}
      </div>
      {/*
        <div className="item-donation">item</div>
        <div className="about-caritas">about</div>
        <div className="recent-donors">donors</div> */}
    </div>
  );
};

export default Hero;
