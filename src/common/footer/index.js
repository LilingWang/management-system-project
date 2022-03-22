import React from "react";
import "./index.css";
import { FOOTER_CONTENTS } from "../../content/form";
import Youtube from "../../svgs/youtube.svg";
import Twitter from "../../svgs/twitter.svg";
import Facebook from "../../svgs/facebook.svg";


const Footer = () => {
  return (
    <div>
      <div className="footer_container">
        <span className="company_rights">{FOOTER_CONTENTS.COMPANY_RIGHTS}</span>
        <div className="logo_container">
          <img className="youtube_icon" src={Youtube} alt="youtube" />
          <img className="twitter" src={Twitter} alt="twitter" />
          <img className="facebook" src={Facebook} alt="facebook" />
        </div>
        <div className="customer_texts">
          <span className="contact_text">{FOOTER_CONTENTS.CONTACTS}</span>
          <span className="privacy_text">{FOOTER_CONTENTS.PRIVACY_POLICY}</span>
          <span className="help_text">{FOOTER_CONTENTS.HELP}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
