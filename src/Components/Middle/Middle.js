import React from "react";
import "./Middle.css";
import Logos from '../Logos/Logos'



export default function Middle() {
  return (
    <div className="middle-div">
      <div className="middle-txts">
        <h1 className="middle-h1">Who we work with</h1>
        <p className="middle-p">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button className=" middle-button">About Us</button>
      </div>
      <Logos/>
    </div>
  );
}
