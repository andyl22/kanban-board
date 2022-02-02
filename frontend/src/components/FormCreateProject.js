/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import React, { useState, useRef, useEffect, useContext } from "react";
import Form from "./Form";
import CancelIcon from "@mui/icons-material/Cancel";
import { ThemeContext } from "../context/ThemeProvider";
import { postHTTP } from "../utilities/fetchAPIs";
import { ProjectContext } from "../context/ProjectProvider";
import { useNavigate } from "react-router-dom";
import { SectionsContext } from "../context/SectionsProvider";

export default function FormCreateProject(props) {
  const { toggleForm } = props;
  const { dispatch } = useContext(SectionsContext);
  const { projectList, setProjectList } = useContext(ProjectContext);
  const [formState, setFormState] = useState({ projectName: "" });
  const inputRef = useRef();
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const addSections = async (project) => {
    setProjectList([...projectList, project]);

    const sectionsToAdd = [
      { sectionName: "Planned", color: "white" },
      { sectionName: "In Progress", color: "#f7b72b" },
      { sectionName: "Completed", color: "#4eff5a" },
    ];

    for (const section of sectionsToAdd) {
      await createSection(project, section);
    }

    navigate(`/kanban-board/project/${project._id}`);
  };

  const createSection = (project, section) => {
    return postHTTP("/projectSection/createSection", {
      projectID: project._id,
      sectionName: section.sectionName,
      color: section.color,
    }).then((res) => res.section);
  };

  const container = css`
    display: flex;
    align-items: center;
    width: 90%;
  `;
  const input = css`
    width: 90%;
  `;

  const closeButton = css`
    color: ${colors.iconColor};
    &:hover {
      color: ${colors.iconHoverColor};
      cursor: pointer;
    }
  `;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postHTTP("/projects/createProject", formState)
      .then((res) => addSections(res.project))
      .catch((err) => console.log(err));
    toggleForm();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleForm();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div css={container}>
      <Form handleSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={formState.projectName}
          id="projectName"
          css={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </Form>
      <CancelIcon fontSize="small" css={closeButton} onClick={toggleForm} />
    </div>
  );
}
