import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 8px 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: '#fff';
  z-index: 9999;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

export const LogoContainer = styled.div`
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const LeftContainer = styled.div`
  width: 65%;
  height: 98%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const RightContainer = styled.div`
  width: 35%;
  height: 78%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 20px;
  }
`;

export const NavContainer = styled.div`
  box-shadow: 0 2px 8px #f0f1f2;
  margin-bottom: 24px;
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 54%;
  background-color: #f0f7ee;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 10px 0 10px 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  min-height: 100%;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f7ee;
  min-height: 100%;
  padding: 10px 10px 0 10px;
  margin: 10px 10px 10px 0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  background: #161616e0;
  padding: 20px 0;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

export const FooterInfo = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px;

  h4 {
    margin: 0 0 10px 0;
    color: white;
  }

  p {
    font-size: 14px;
    color: white;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FooterContact = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 80px;
  font-size: 14px;
  color: white;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const GoogleMapsFrame = styled.iframe`
  border: 0;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ModalContentWrapper = styled.div`
  height: 600px;
  overflow-y: auto;
  padding-right: 12px;
`;