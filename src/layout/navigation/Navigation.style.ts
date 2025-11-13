// Libraries
import styled from 'styled-components';
import { Menu } from 'antd';

export const NavContainer = styled.div`
  background-color: transparent;
  min-width: 150px;
`;

export const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #f0f7ee !important;
  border-bottom: none;
  border-radius: 8px;
  padding: 0 10px;

  .ant-menu-item {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    padding: 0 24px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .ant-menu-item:hover {
    color: #2e7d32 !important;
    background-color: #e0f2f1 !important;
  }

  .ant-menu-item-selected {
    color: #fff !important;
    background-color: #4CAF50 !important;
  }

  .ant-menu-item-selected:hover {
    background-color: #45a049 !important;
  }
`;