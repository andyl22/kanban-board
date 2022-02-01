/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import ProjectHeaderContent from "./ProjectHeaderContent";
import DeleteProjectController from "./DeleteProjectController";

export default function ProjectHeader(props) {
  const { headerTitle } = props;
  const { colors, mq } = useContext(ThemeContext);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const projectHeader = css`
    display: flex;
    width: 100%;
    flex: 1;
    padding: 0.5em 2em;
    background: ${colors.headerColor};
    box-shadow: 0px 0px 10px ${colors.headerShadowColor};
    color: ${colors.basicFontColor};
    font-weight: 600;
    ${mq[0]} {
      justify-content: center;
    }
  `;

  const toggleConfirmDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  return (
    <>
      <div css={projectHeader}>
        <ProjectHeaderContent
          headerTitle={headerTitle}
          showModalDelete={showModalDelete}
          toggleConfirmDelete={toggleConfirmDelete}
        />
      </div>
      {showModalDelete ? (
        <DeleteProjectController
          itemName={headerTitle}
          toggleModal={toggleConfirmDelete}
        />
      ) : null}
    </>
  );
}
