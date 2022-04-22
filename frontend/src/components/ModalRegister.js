/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Modal from "./Modal";
import FormRegister from "./FormRegister";

export default function ModalRegister(props) {
  const { toggleModal } = props;
  const formPadding = css`
    padding: 1em;
  `;

  return (
    <Modal title={"Register"} toggleModal={toggleModal}>
      <div css={formPadding}>
        <FormRegister toggleModal={toggleModal} />
      </div>
    </Modal>
  );
}
