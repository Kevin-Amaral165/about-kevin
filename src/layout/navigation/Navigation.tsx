// Core
import React from 'react';

// Styles
import { StyledMenu, NavContainer } from './Navigation.style';
import type { MenuProps } from 'antd';

interface NavigationProps {
  onNavClick: (key: string) => void;
  selectedKey: string | null;
  menuItems: MenuProps['items'];
}

const Navigation: React.FC<NavigationProps> = ({ onNavClick, selectedKey, menuItems }) => {
  return (
    <NavContainer>
      <StyledMenu
        mode="horizontal"
        selectedKeys={selectedKey ? [selectedKey] : []}
        items={menuItems}
        onClick={({ key }) => onNavClick(key)}
      />
    </NavContainer>
  );
};

export default Navigation;