import React from 'react';
import { Menu } from 'antd';

interface NavigationProps {
  onNavClick: (key: string) => void;
  selectedKey: string | null;
  menuItems: { key: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ onNavClick, selectedKey, menuItems }) => {
  return (
    <Menu
      mode="horizontal"
      selectedKeys={selectedKey ? [selectedKey] : []}
      onClick={({ key }) => onNavClick(key)}
      items={menuItems}
      style={{ borderBottom: 'none', justifyContent: 'flex-end', background: 'transparent' }}
    />
  );
};

export default Navigation;
