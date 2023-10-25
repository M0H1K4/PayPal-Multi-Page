import React from "react";
import "./Footer.css";
import NavBar from "../NavBar/NavBar";
import Fb from '../../assets/shared/desktop/facebook.svg'
import Tw from '../../assets/shared/desktop/linkedin.svg'
import Lk from '../../assets/shared/desktop/twitter.svg'


export default function () {
  return (
    <footer className="footer-div">
      <div className="iconebi">
        <NavBar />
      </div>
      <div className="ICONS">
            <img className="ICON" src={Fb} />
            <img className="ICON" src={Tw} />
            <img  className="ICON" src={Lk} />
      </div>
    </footer>
  );
}
