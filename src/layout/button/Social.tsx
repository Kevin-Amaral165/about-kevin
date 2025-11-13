import React from 'react';
import { SocialLink } from './Social.style';

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  $backgroundColor: string;
  ariaLabel: string;
}

const Social: React.FC<SocialButtonProps> = ({ href, icon, $backgroundColor, ariaLabel }) => {
  return (
    <SocialLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      $backgroundColor={$backgroundColor}
      aria-label={ariaLabel}
    >
      {icon}
    </SocialLink>
  );
};

export default Social;