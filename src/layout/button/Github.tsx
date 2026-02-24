// Core
import React from 'react';

// Libraries
import { FaGithub } from 'react-icons/fa';

// Layout
import SocialButton from './Social';

const GitHub: React.FC = () => {
  const githubUrl = 'https://github.com/Kevin-Amaral165';

  return (
    <SocialButton
      href={githubUrl}
      icon={<FaGithub />}
      $backgroundColor="#333"
      ariaLabel="GitHub"
    />
  );
};

export default GitHub;
