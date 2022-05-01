import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <div class="wrapper__typing">
          <h1 className="typing">Thanh Tai</h1>
        </div>
        <h5 className="dark:text-light">Front-End Developer</h5>

        <CTA></CTA>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="rounded-t-[30px]" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
