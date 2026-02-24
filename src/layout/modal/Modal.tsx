import React from 'react';
import { Modal as AntModal } from 'antd';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  return (
    <AntModal
      title={title}
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
      centered
    >
      {children}
    </AntModal>
  );
};

export default Modal;
