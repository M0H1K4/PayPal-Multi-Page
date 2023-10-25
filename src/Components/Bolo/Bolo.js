import React from "react";
import boloimg1 from "../../assets/home/desktop/icon-personal-finances.svg";
import boloimg2 from "../../assets/home/desktop/icon-banking-and-coverage.svg";
import boloimg3 from "../../assets/home/desktop/icon-consumer-payments.svg";

import "./Bolo.css";

export default function Bolo() {
  return (
    <div className="bolo-div">
      <div className="bolo-div1">
        <img className="bolo-img" src={boloimg1} />
        <h1 className="bolo-h1">Personal Finances</h1>
        <p className="bolo-p">
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.{" "}
        </p>
      </div>
      <div className="bolo-div1">
        <img className="bolo-img" src={boloimg2} />
        <h1 className="bolo-h1">Banking & Coverage</h1>
        <p className="bolo-p">
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </div>
      <div className="bolo-div1">
        <img className="bolo-img" src={boloimg3} />
        <h1 className="bolo-h1">Consumer Payments</h1>
        <p className="bolo-p">
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </div>
      
    </div>
  );
}
