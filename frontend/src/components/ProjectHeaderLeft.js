/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import FormUpdateProjectName from "./FormUpdateProjectName";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ProjectHeaderLeft(props) {
  const { headerTitle, toggleConfirmDelete } = props;
  const [showEdit, setShowEdit] = useState(false);
  const [header, setHeader] = useState(headerTitle);
  const { colors } = useContext(ThemeContext);

  const leftHeader = css`
    display: flex;
    gap: 0.5em;
    align-items: center;
  `;

  const button = css`
    display: flex;
    align-items: center;
    color: ${colors.iconColor};
    background: none;
    border: none;
    &:hover {
      cursor: pointer;
      color: ${colors.iconHoverColor};
    }
  `;

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div css={leftHeader}>
      {showEdit ? (
        <FormUpdateProjectName
          toggleForm={toggleEdit}
          initialValue={header}
          updateHeader={setHeader}
        />
      ) : (
        <>
          {header}
          <button css={button} aria-label="Edit Project Name">
            <EditIcon fontSize="small" onClick={toggleEdit} />
          </button>
          <button css={button} aria-label="Delete Project">
            <DeleteForeverIcon fontSize="small" onClick={toggleConfirmDelete} />
          </button>
        </>
      )}
    </div>
  );
}
