import React, { useState } from "react";
import "./style/Navbar.css";
import git_dark from "../assets/images/git_dark.png";
import git_light from "../assets/images/git_light.png";
import ig_dark from "../assets/images/ig_dark.png";
import ig_light from "../assets/images/ig_light.png";
import fb_dark from "../assets/images/fb_dark.png";
import fb_light from "../assets/images/fb_light.png";

function Navbar() {
  const [gitHover, setGitHover] = useState(false);
  const [igHover, setIgHover] = useState(false);
  const [fbHover, setFbHover] = useState(false);

  return (
    <div className="Navbar">
      <div className="Logo">
        <b>บัง'แทน</b>
      </div>
      <div className="flex">
        <div className="memu">
          <button>Home</button>
          <button>Skills</button>
          <button>Project</button>
        </div>
        <div className="contact">
          <div
            className="circle center circle-git"
            onMouseOver={() => {
              setGitHover(true);
            }}
            onMouseOut={() => {
              setGitHover(false);
            }}
          >
            <a
              href="https://github.com/TAN-PARAMET"
              target="_blank"
              className="center"
            >
              <img
                className="logo"
                src={gitHover ? git_light : git_dark}
                alt="git"
              />
            </a>
          </div>
          <div
            className="circle center circle-ig"
            onMouseOver={() => {
              setIgHover(true);
            }}
            onMouseOut={() => {
              setIgHover(false);
            }}
          >
            <a
              href="https://www.instagram.com/lungtan_40yearold/"
              target="_blank"
              className="center"
            >
              <img
                className="logo"
                src={igHover ? ig_light : ig_dark}
                alt="ig"
              />
            </a>
          </div>
          <div
            className="circle center circle-fb"
            onMouseOver={() => {
              setFbHover(true);
            }}
            onMouseOut={() => {
              setFbHover(false);
            }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100011325230228"
              target="_blank"
              className="center"
            >
              <img
                className="logo"
                src={fbHover ? fb_light : fb_dark}
                alt="fb"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
