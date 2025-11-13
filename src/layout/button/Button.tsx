import React from 'react';
import { StyledButton } from './Button.style';

type ButtonCustomProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  style?: React.CSSProperties;
  htmlType?: 'button' | 'submit' | 'reset';
};

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  children,
  onClick,
  type = 'primary',
  style,
  htmlType = 'button',
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      style={style}
      htmlType={htmlType}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonCustom;