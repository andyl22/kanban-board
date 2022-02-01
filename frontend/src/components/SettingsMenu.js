/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import FormSettings from "./FormSettings";
import ThemeButton from "./ThemeButton";

export default function SettingsMenu() {
  const settingsMenu = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  `;

  const settingsContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    height: 50%;
    width: 75%;
    background: white;
    border-radius: 1em;
  `;

  return (
    <main css={settingsMenu}>
      <section css={settingsContainer}>
        <FormSettings />
        <ThemeButton />
      </section>
    </main>
  );
}
