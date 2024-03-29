import "../Component_CSS/login.css";
import Apple from "./icons/apple_sign_in.png";
import Facebook from "./icons/facebook_sign_in.png";
import Google from "./icons/google_sign_in.png";
import Microsoft from "./icons/microsoft_sign_in.png";
import visible from "../Components/icons/visible_password.png";
import hide from "../Components/icons/hide_password.png";
import user from "../Components/icons/user1.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [visibility, setVisible] = useState(false);
  const [visibilityImg, setVisibilityImg] = useState(hide);

  let passwordType = document.getElementById("password");

  let changeVisibility = () => {
    if (visibility === false) {
      passwordType.type = "text";
      setVisibilityImg(visible);
      setVisible(true);
    } else {
      passwordType.type = "password";
      setVisibilityImg(hide);
      setVisible(false);
    }
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", { userName, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="loginCard">
        <div id="login_image" className="login_side_image">
          {" "}
        </div>

        <div className="rightArea">
          <h1 id="mainHeading">Explore the History</h1>
          <h4 id="welcome">welcome to Highlights of TamilNadu</h4>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="userName"
                placeholder="User name or Email"
                type="text"
                name="username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <img src={user} className="user-icon" />
            </div>
            <div>
              <input
                className="password"
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="visible-hide-button"
                id="change-icon"
                type="button"
                onClick={changeVisibility}
              >
                <img src={visibilityImg} className="visible-hide-icon" />
              </button>
            </div>
            <input type="submit" id="sign_in" value={"Sign in"} />
          </form>

          <a href="#" className="forgot">
            Forgot password?
          </a>

          {/*<button id="sign_in" type="submit">
            Sign in
  </button>*/}

          <div id="block_of_OR">
            <div className="leftLine"></div>
            or
            <div className="rightLine"></div>
          </div>

          <div className="sign_in_icons">
            <span className="icon" id="icon_g">
              <a href="" className="icon_link">
                <img src={Google} />
              </a>
            </span>
            <span className="icon" id="icon_f">
              <a href="" className="icon_link">
                <img src={Facebook} />
              </a>
            </span>
            <span className="icon" id="icon_a">
              <a href="" className="icon_link">
                <img src={Apple} />
              </a>
            </span>
            <span className="icon" id="icon_m">
              <a href="" className="icon_link">
                <img src={Microsoft} />
              </a>
            </span>
          </div>

          <div className="createAccount">
            <span className="one">New Member?</span>
            <span className="two">
              <a href=" " id="new_account">
                {" "}
                Create Account
              </a>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Link to="/home">
          <button className="go-to-home" type="button">
            Skip Sign in
          </button>
        </Link>
      </div>
    </>
  );
}
