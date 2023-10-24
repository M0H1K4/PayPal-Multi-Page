import React from "react";
import "./Logos.css";
import Logo1 from "../../assets/shared/desktop/nvidia.svg";
import Logo2 from "../../assets/shared/desktop/tesla.svg";
import Logo3 from "../../assets/shared/desktop/oracle.svg";
import Logo4 from "../../assets/shared/desktop/hewlett-packard.svg";
import Logo5 from "../../assets/shared/desktop/microsoft.svg";
import Logo6 from "../../assets/shared/desktop/google.svg";

export default function Logos() {
  return (
    <div className="Logos-div">
      <img className="logos-logo1" src={Logo1} />
      <img className="logos-logo1" src={Logo2} />
      <img className="logos-logo1" src={Logo3} />
      <img className="logos-logo1" src={Logo4} />
      <img className="logos-logo1" src={Logo5} />
      <img className="logos-logo1" src={Logo6} />
    </div>
  );
}
