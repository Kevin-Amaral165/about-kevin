import styled from 'styled-components';

interface SocialLinkProps {
  $backgroundColor: string;
}

export const SocialLink = styled.a<SocialLinkProps>`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$backgroundColor};
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;