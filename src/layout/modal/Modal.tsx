// Core
import React from 'react';

// Styles
import { StyledModal } from './Modal.style';

interface ModalCustomProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalCustom: React.FC<ModalCustomProps> = ({ open, onClose, title, children }) => {
  return (
    <StyledModal
      open={open}
      onCancel={onClose}
      footer={null}
      title={title}
      styles={{
        mask: {
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {children}
    </StyledModal>
  );
};

export default ModalCustom;