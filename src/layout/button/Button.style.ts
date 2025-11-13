import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  /* Reset Ant Design defaults for custom styling */
  background: linear-gradient(145deg, #2b5de5, #1a3a8a);
  border: none;
  color: #ffffff;

  /* Sizing and Spacing */
  height: 44px;
  padding: 0 30px;
  border-radius: 22px; /* Pill-shaped */

  /* Typography */
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;

  /* Flexbox for icon alignment */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Space between icon and text */

  /* Visual Effects */
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  /* Hover and Active States */
  &:hover {
    background: linear-gradient(145deg, #1a3a8a, #2b5de5);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
    color: #ffffff; /* Ensure color stays white on hover */
  }

  &:active {
    transform: translateY(0px) scale(0.98);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  /* Disabled State */
  &:disabled {
    background: #e0e0e0;
    color: #a0a0a0;
    box-shadow: none;
    cursor: not-allowed;
  }
`;