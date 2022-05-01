import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import useDarkMode from "../../useDarkMode";
import { FaMoon } from "react-icons/fa";
const HeaderSocials = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/l%C3%AA-th%C3%A0nh-t%C3%A0i/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com/ThanhTai46" target="_blank" rel="noreferrer">
        <BsGithub></BsGithub>
      </a>
      <a
        href="https://facebook.com/luxurydemon99"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare></FaFacebookSquare>
      </a>
      {isDarkMode ? (
        <BsSunFill
          className="cursor-pointer"
          color="#e9c46a"
          size={"24px"}
          onClick={() => toggleDarkMode(!isDarkMode)}
        />
      ) : (
        <FaMoon
          className="cursor-pointer"
          color="#e9c46a"
          size={"24px"}
          onClick={() => toggleDarkMode(!isDarkMode)}
        />
      )}
    </div>
  );
};

export default HeaderSocials;
