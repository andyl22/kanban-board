/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { UserContext } from "../context/UserProvider";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import DropdownUser from "./DropdownUser";
import Cookies from "js-cookie";
import { postHTTP } from "../utilities/fetchAPIs";

export default function HeaderRight() {
  const { darkMode, toggleDarkMode, colors, mq } = useContext(ThemeContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const rightHeader = css`
    display: flex;
    text-align: center;
    align-items: center;
    gap: 2em;
    font-weight: 600;
    padding: 0 1em;
    font-size: 0.8em;
    a {
      color: ${colors.basicFontColor};
      &:hover {
        color: ${colors.linkHoverColor};
      }
    }
    ${mq[0]} {
      flex-wrap: wrap;
      justify-content: center;
      font-size: 0.7em;
    }
  `;

  const button = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${colors.button};
    color: white;
    padding: 0.4em 1em;
    line-height: 1em;
    border-radius: 0.3em 1em;
    border: none;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      background: ${colors.buttonHover};
      transform: scale(1.05);
      transition: 0.1s ease-in;
    }
  `;

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  const toggleRegisterModal = () => {
    setShowRegister(!showRegister);
  };

  const handleLogout = async () => {
    setCurrentUser(null);
    Cookies.remove("user");
    Cookies.remove("darkMode");
    if (darkMode) toggleDarkMode();
    postHTTP("/auth/logout", { method: "POST" });
    navigate("/");
  };

  const rightHeaderLinks = (
    <>
      <Link to="/" id="home">
        Kanban Board
      </Link>
      <Link to="/about" id="about">
        About
      </Link>
    </>
  );

  const userAuthButtons = (
    <>
      <button onClick={toggleLoginModal} css={button}>
        Log In
      </button>
      <button onClick={toggleRegisterModal} css={button}>
        Register
      </button>
    </>
  );

  const conditionalRendering = currentUser ? (
    <DropdownUser currentUser={currentUser} handleLogout={handleLogout} />
  ) : (
    userAuthButtons
  );

  return (
    <>
      <nav css={rightHeader}>
        {rightHeaderLinks}
        {conditionalRendering}
      </nav>
      {showLogin ? <ModalLogin toggleModal={toggleLoginModal} /> : null}
      {showRegister ? (
        <ModalRegister toggleModal={toggleRegisterModal} />
      ) : null}
    </>
  );
}
