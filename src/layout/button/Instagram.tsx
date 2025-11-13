import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import SocialButton from './Social';

const Instagram: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/engenharia.mqz/';

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