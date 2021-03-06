/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Modal from "./Modal";

export default function ModalDeleteConfirm(props) {
  const { itemName, toggleModal, deleteObject } = props;

  const modalContentContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    p {
      color: black !important;
      word-break: break-word;
    }
  `;

  const deleteConfirmButtonContainer = css`
    display: flex;
    gap: 1em;
    padding: 1em 0 0 0;
    button {
      border: 1px solid #cdcdcd;
      border-radius: 0.5rem;
      padding: 0.2rem 1rem;
      font-weight: 600;
      &:hover {
        cursor: pointer;
        background: #d9d9d9;
      }
    }
  `;

  return (
    <Modal title="Confirm Delete" toggleModal={toggleModal}>
      <div css={modalContentContainer}>
        <p>{`Are you sure you want to delete "${itemName}?"`}</p>
        <div css={deleteConfirmButtonContainer}>
          <button onClick={deleteObject}>Confirm</button>
          <button onClick={toggleModal}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}
