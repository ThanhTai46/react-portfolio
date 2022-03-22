import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub></BsGithub>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookSquare></FaFacebookSquare>
      </a>
    </div>
  );
};

export default HeaderSocials;
