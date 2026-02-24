// Core
import React from 'react';

// Libraries
import { FaInstagram } from 'react-icons/fa';

// Layout
import SocialButton from './Social';

const Instagram: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/kevinamaraloficial/';

  return (
    <SocialButton
      href={instagramUrl}
      icon={<FaInstagram />}
      $backgroundColor="#E1306C"
      ariaLabel="Instagram"
    />
  );
};

export default Instagram;