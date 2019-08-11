import React from "react";
import { FooterBox } from "./styles";
import { FaCreativeCommons } from "react-icons/fa";

const Footer = () => (
  <FooterBox>
    <div>
      <p>
        <FaCreativeCommons /> 2019 Copyright:{" "}
        <a href="https://gabrieljony.github.io/">
          <strong> Gabriel Jony</strong>
        </a>{" "}
        - Site hosted on <a href="https://github.com">GitHub</a> uses{" "}
        <a href="https://reactjs.org/">ReactJs</a>
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-jony-8b304364/">
            <img
              src={require("../../assets/linkedin.png")}
              alt="Logo do Linkedin"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gabriel_jony/">
            <img
              src={require("../../assets/instagram.png")}
              alt="Logo do Instagram"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/gabrieljony">
            <img
              src={require("../../assets/github.png")}
              alt="Logo do GitHub"
            />
          </a>
        </li>
      </ul>
    </div>
  </FooterBox>
);

export default Footer;
