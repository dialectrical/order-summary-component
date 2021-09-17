import React from "react";
import hero from "../img/illustration-hero.svg";
import music from "../img/icon-music.svg";

export const Card = () => {
  return (
    <div className="card">
      <img src={hero} className="hero" />
      <h2>Order Summary</h2>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="planBackground">
        <div className="planFlex">
          <div className="planFlexLeft">
            <img src={music} className="planIcon" />
            <div className="planText">
              <h3 className="planHeader">Annual Plan</h3>
              <h3 className="planSubtitle">$59.99/year</h3>
            </div>
          </div>
          <a className="planLink">Change</a>
        </div>
      </div>
      <button type="button" className="button">
        Proceed to Payment
      </button>
      <a>Cancel Order</a>
    </div>
  );
};
