// Libraries
import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  top: 120px;
  width: 70% !important;
  max-width: 1200px;
  margin: 0 auto;

  .ant-modal-content {
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 10px B30px rgba(0, 0, 0, 0.2);
    padding: 0;
  }

  .ant-modal-header {
    background-color: #ffffff;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 8px 8px 0 0;
    padding: 20px 24px;
  }

  .ant-modal-title {
    font-size: 22px;
    font-weight: 600;
    color: #1e3a8a;
  }

  .ant-modal-close {
    top: 12px;
    right: 12px;
  }

  .ant-modal-close-x {
    font-size: 18px;
    color: #888;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #333;
      transform: rotate(90deg);
    }
  }

  .ant-modal-body {
    padding: 24px;
    font-size: 16px;
    line-height: 1.7;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 95% !important;
    top: 100px;
  }
`;