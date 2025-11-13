import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;
