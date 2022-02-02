/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function AboutContent() {
  const { colors } = useContext(ThemeContext);
  const contentContainer = css`
    width: 100%;
    height: 100%;
    padding: 2em;
    color: ${colors.basicFontColor};
    ul {
      padding: 0.5em 2em;
    }
  `;

  return (
    <article css={contentContainer}>
      <p>
        This is a practice project created via the MERN stack. Only an username
        and password is required for registration. <br />
        Basic functionality includes simple drag and drop of Items, and CRUD
        functionality for:
      </p>
      <ul>
        <li>Projects</li>
        <li>Sections</li>
        <li>Section Items</li>
      </ul>
      <p>
        Includes a dark mode toggle in the user settings which persists between
        sessions and refreshes.
        <br />
        <b>Cookies are used by this application!</b>
        <br />
        Usage includes storing user info, themes, and auth.
      </p>
    </article>
  );
}
