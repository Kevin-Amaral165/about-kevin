// Core
import React from 'react';

// Libraries
import { FaWhatsapp } from 'react-icons/fa';

// Layout
import SocialButton from './Social';

const WhatsApp: React.FC = () => {
  const phoneNumber = '5519993590707';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <SocialButton
      href={whatsappUrl}
      icon={<FaWhatsapp />}
      $backgroundColor="#25D366"
      ariaLabel="WhatsApp"
    />
  );
};

export default WhatsApp;