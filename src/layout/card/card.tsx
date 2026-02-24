import React from 'react';
import { StyledCard, CardImageContainer, CardLabel } from './card.style';

type CardProps = {
  imageSrc: string;
  altText?: string;
  label: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText = '',
  label,
  onClick,
}) => {
  return (
    <StyledCard onClick={onClick}>
      <CardImageContainer>
        <img src={imageSrc} alt={altText} />
      </CardImageContainer>
      <CardLabel>{label}</CardLabel>
    </StyledCard>
  );
};

export default Card;