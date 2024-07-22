import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By JobZee</div>
      <div>
        <Link to={"https://www.facebook.com/sachin.saroj.73345048/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/Sachiinkk"} target="blank">
          <FaGithub></FaGithub>
        </Link>
        <Link to={"https://www.linkedin.com/in/sachin-saroj-09045725a/"} target="_blank">
          <FaLinkedin />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
