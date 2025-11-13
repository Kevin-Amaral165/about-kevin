import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 8px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  background-color: #1e1e1e;
  z-index: 9999;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

export const LogoContainer = styled.div`
  height: 90px;
  width: 90px;
  margin-left: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
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

const animate = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
  position: relative;
  overflow: hidden;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
  padding: 10px;
  background: linear-gradient(45deg, #1f1f1f, #292929);
  animation: animateBackground 20s ease-in-out infinite alternate;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 54%;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
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
  background-color: #1e1e1e;
  min-height: 100%;
  padding: 10px 10px 0 10px;
  margin: 10px 10px 10px 0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
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

export const Circles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: ${animate} 25s linear infinite; 
    bottom: -150px;

    &:nth-child(1) {
      left: 25%;
      width: 80px;
      height: 80px;
      animation-delay: 0s;
    }

    &:nth-child(2) {
      left: 10%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 12s;
    }

    &:nth-child(3) {
      left: 70%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
    }

    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-delay: 0s;
      animation-duration: 18s;
    }

    &:nth-child(5) {
      left: 65%;
      width: 20px;
      height: 20px;
      animation-delay: 0s;
    }

    &:nth-child(6) {
      left: 75%;
      width: 110px;
      height: 110px;
      animation-delay: 3s;
    }

    &:nth-child(7) {
      left: 35%;
      width: 150px;
      height: 150px;
      animation-delay: 7s;
    }

    &:nth-child(8) {
      left: 50%;
      width: 25px;
      height: 25px;
      animation-delay: 15s;
      animation-duration: 45s;
    }

    &:nth-child(9) {
      left: 20%;
      width: 15px;
      height: 15px;
      animation-delay: 2s;
      animation-duration: 35s;
    }

    &:nth-child(10) {
      left: 85%;
      width: 150px;
      height: 150px;
      animation-delay: 0s;
      animation-duration: 11s;
    }
  }
`;