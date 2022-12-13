/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx, keyframes } from "@emotion/react";
import ModalHeader from "./ModalHeader";

export default function Modal(props) {
  const { toggleModal, title, children } = props;
  const maxZ =
    Array.from(document.querySelectorAll("body *"))
      .map((a) => window.getComputedStyle(a).zIndex)
      .filter((a) => a !== "auto")
      .sort()
      .pop() + 1 || 1;

  const modal = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: ${maxZ};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.4);
  `;

  const rolloutAnimation = keyframes`
  0% {
    transform: translateY(-20px)
  }
  100% {
    transform: translateY(0px)
`;

  const modalBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    overflow: hidden;
    background: none;
    margin: 0 auto;
    max-width: 300px;
    width: 90%;
    min-width: 250px;
    text-align: center;
    animation: ${rolloutAnimation} 1s ease;
  `;

  const modalContent = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 100%;
  `;

  const closeModal = (e) => {
    if (e.target.id === "modal-container") toggleModal();
  };

  return (
    <div id="modal-container" css={modal} onMouseDown={closeModal}>
      <div id="modal-content" css={modalBox}>
        <ModalHeader toggleModal={toggleModal} title={title} />
        <div css={modalContent}>{children}</div>
      </div>
    </div>
  );
}
