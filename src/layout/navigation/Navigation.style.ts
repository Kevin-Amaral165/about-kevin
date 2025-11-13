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
  height: 60px;
  background-color: #493379ff !important;
  border-bottom: none;
  border-radius: 8px;
  padding: 0 10px;

  .ant-menu-item {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    padding: 0 24px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .ant-menu-item:hover {
    color: #42a5f5 !important;
    background-color: #424242 !important;
  }

  .ant-menu-item-selected {
    color: #ffffff !important;
    background-color: #0D47A1 !important;
  }

  .ant-menu-item-selected:hover {
    background-color: #1565C0 !important;
  }
`;