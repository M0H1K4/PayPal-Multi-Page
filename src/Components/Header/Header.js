import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import iCon from "../../assets/shared/desktop/logo.svg";
import ICon from "../../assets/home/desktop/illustration-phone-mockup.svg";

export default function Header() {
  return (
    <header className="Header-div">
      <img className="Paypal-phone" src={ICon} />
      <div className="Header-buttons">
        <img className="Paypal" src={iCon} />
        <h3 className="header-h3">Pricing</h3>
        <h3 className="header-h3">About</h3>
        <h3 className="header-h3">Contact</h3>
        <button className="schedule-button">Schedule a Demo</button>
      </div>
      <div className="header-main_txt">
        <h1 className="paypal-h1">
          Start building with our APIs for absolutely free.
        </h1>
        <div className="header-input_div">
          <input type="email" className="header-input" />
          <button className="schedule-button1">Schedule a Demo</button>
        </div>
      </div>
    </header>
  );
}
