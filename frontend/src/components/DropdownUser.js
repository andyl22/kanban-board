/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

export default function DropdownUser(props) {
  const { currentUser, handleLogout } = props;

  const dropdownOption = css`
    width: 100%;
    background: #f2f2f2;
    border-radius: 0.2em;
    border: 1px solid #cccccc;
    font-weight: 600;
    padding: 0.2em 0;
    &:hover {
      cursor: pointer;
      background: #f0f0f0;
      color: gray;
      a {
        color: gray;
      }
    }
    a {
      color: black;
    }
  `;

  const listStyle = css`
    li {
      margin-bottom: 0.5em;
      &:last-child {
        margin-bottom: 0;
      }
    }
    list-style: none;
  `;

  return (
    <Dropdown dropDownName={currentUser.username}>
      <ul css={listStyle}>
        <li>
          <button css={dropdownOption}>
            <Link to="/settings" id="profile">
              Profile
            </Link>
          </button>
        </li>
        <li>
          <button css={dropdownOption}>
            <Link to="/settings" id="settings">
              Settings
            </Link>
          </button>
        </li>
        <li>
          <button css={dropdownOption} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </Dropdown>
  );
}
