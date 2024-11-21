import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linked from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>lokeshvlw2004@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} onClick={()=>window.open("https://www.instagram.com/__lokesh_.25?igsh=dmE0em5hcW5hd2cz","_blank")} />
          <Linked color="white" size={"3rem"} onClick={()=>window.open("https://linkedin.com/in/lokeshwaran-v-680827257","_blank")}/>
          <Gitub color="white" size={"3rem"} onClick={()=>window.open("https://github.com/lokeshvivek2511","_blank")}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
