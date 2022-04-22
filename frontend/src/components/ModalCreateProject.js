import Modal from "./Modal";
import FormCreateComponent from "./FormCreateComponent";

export default function ModalLogin(props) {
  const { toggleModal } = props;

  return (
    <Modal toggleModal={toggleModal}>
      <FormCreateComponent toggleModal={toggleModal} />
    </Modal>
  );
}
