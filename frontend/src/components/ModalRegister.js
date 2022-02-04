/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Modal from "./Modal";
import FormRegister from "./FormRegister";
import ModalHeader from "./ModalHeader";

export default function ModalRegister(props) {
  const { toggleModal } = props;
  const formPadding = css`
    padding: 1em;
  `;

  return (
    <Modal toggleModal={toggleModal}>
      <ModalHeader title={"Register"} toggleModal={toggleModal} />
      <div css={formPadding}>
        <FormRegister toggleModal={toggleModal} />
      </div>
    </Modal>
  );
}
