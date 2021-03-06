/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Dropdown(props) {
  const { children, dropDownName } = props;
  const [showDropDown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropDown);
  };

  const { colors } = useContext(ThemeContext);

  const dropDownContainer = css`
    position: relative;
  `;

  const userProfile = css`
    display: flex;
    border: none;
    background: none;
    align-items: center;
    color: ${colors.linkFontColor};
    &:hover {
      cursor: pointer;
      color: ${colors.linkHoverColor};
    }
    p {
      font-weight: 600;
      color: inherit;
    }
  `;

  const dropDown = css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.5em;
    right: 0;
    border-radius: 0.4em;
    padding: 0.5em;
    min-width: 100px;
    z-index: 1;
    background: white;
    border: 1px solid #9d9d9d;
  `;

  return (
    <div css={dropDownContainer} aria-expanded={showDropDown}>
      <button css={userProfile} onClick={toggleDropdown} aria-label="User Management Dropdown">
        <p>{dropDownName}</p>
        <ArrowDropDownIcon />
      </button>
      {showDropDown ? <span css={dropDown}> {children} </span> : null}
    </div>
  );
}
