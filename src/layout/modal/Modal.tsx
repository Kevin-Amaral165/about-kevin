// Core
import React from 'react';

// Styles
import { StyledModal } from './Modal.style';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <StyledModal
      open={open}
      onCancel={onClose}
      footer={null}
      title={title}
      centered
      destroyOnHidden
      styles={{
        mask: {
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      {children}
    </StyledModal>
  );
};

export default Modal;