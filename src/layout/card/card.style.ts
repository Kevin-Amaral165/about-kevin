import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 680px;
  height: 280px;
  background-color: #1e1e1e;
  margin-bottom: 20px;
  border-radius: 8px !important;
  cursor: pointer !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.5);
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 90%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardLabel = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 4px 0;
`;
