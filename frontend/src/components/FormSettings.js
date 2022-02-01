/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { useState } from "react";
import Form from "./Form";

export default function FormSettings() {
  const [formState, setFormState] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  return (
    <Form handleSubmit={handleSubmit}>
    </Form>
  );
}
