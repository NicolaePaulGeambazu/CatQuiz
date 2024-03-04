import React from 'react';
import { ModalProps } from '../../types';
import { ModalCloseButton, ModalContent, ModalOverlay } from './Components.style';

const Modal = ({ onClose, catDataQuestion, iscorrect } : ModalProps) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleClickOutside}>
      <ModalContent>
      <h2>{iscorrect ? 'Correct!' : 'Incorrect!'}</h2>
          <p>{catDataQuestion.description}</p>
        <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
