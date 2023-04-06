import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal!
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button primary onClick={handleClose}>
              I Accept
            </Button>
          }
        >
          <p>Here is an important note</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
