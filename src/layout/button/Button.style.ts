// Libraries
import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  background: linear-gradient(145deg, #2b5de5, #1a3a8a);
  border: none;
  color: #ffffff;
  height: 44px;
  padding: 0 30px;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #1a3a8a, #2b5de5);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
    color: #ffffff;
  }

  &:active {
    transform: translateY(0px) scale(0.98);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #e0e0e0;
    color: #a0a0a0;
    box-shadow: none;
    cursor: not-allowed;
  }
`;