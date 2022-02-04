/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Modal from "./Modal";
import FormLogin from "./FormLogin";
import ModalHeader from "./ModalHeader";

export default function ModalLogin(props) {
  const { toggleModal } = props;
  const formPadding = css`
    padding: 1em;
  `;

  return (
    <Modal toggleModal={toggleModal}>
      <ModalHeader title={"Log In"} toggleModal={toggleModal} />
      <div css={formPadding}>
        <FormLogin toggleModal={toggleModal} />
      </div>
    </Modal>
  );
}
