import { useState } from 'react';
import Navigation from '../../layout/navigation/Navigation';
import Modal from '../../layout/modal/Modal';
import LeftPanel from './leftPanel/LeftPanel';
import RightPanel from '../rightPanel/RightPanel';

import {
  HeaderContainer,
  LeftContainer,
  LogoContainer,
  RightContainer,
  DashboardWrapper,
  MainContent,
  LeftContent,
  RightContentWrapper,
  RightPanelContainer,
  FooterContainer,
  FooterInfo,
  FooterContact,
  ContactItem,
  GoogleMapsFrame,
  ModalContentWrapper,
  SocialButtonsWrapper,
} from './Dashboard.style';

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import WhatsApp from '../../layout/button/WhatsApp';
import Instagram from '../../layout/button/Instagram';

const logo = 'https://via.placeholder.com/150?text=Logo';

const menuItems = [
  { key: 'modal1', label: 'Quem Somos' },
  { key: 'modal2', label: 'Obras Realizadas' },
  { key: 'modal3', label: 'Tijolos Ecológicos' },
  { key: 'modal4', label: 'Contato' },
];

function Dashboard() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleNavClick = (modalKey: string) => {
    setOpenModal(modalKey);
  };

  const handleClose = () => {
    setOpenModal(null);
  };


  return (
    <DashboardWrapper>
      {/* Header */}
      <HeaderContainer>
        <LeftContainer>
          <LogoContainer>
            <img src={logo} alt="Kevin Amaral" />
          </LogoContainer>
        </LeftContainer>

        <RightContainer>
          <Navigation
            onNavClick={handleNavClick}
            selectedKey={openModal}
            menuItems={menuItems}
          />
        </RightContainer>
      </HeaderContainer>

      <MainContent>
        {/* Texto */}
        <LeftContent>
          <LeftPanel />
        </LeftContent>

        {/* RIGTH PAINEL */}
        <RightContentWrapper>
          <RightPanelContainer>
            <div style={{ width: '100%' }}>
              <RightPanel />
            </div>
          </RightPanelContainer>
        </RightContentWrapper>
      </MainContent>

      <FooterContainer style={{ padding: '10px 20px' }}>
        <FooterInfo>
          <h4>Kevin</h4>
          <p>
            Conteudo
          </p>
        </FooterInfo>

        <FooterContact>
          <div>
            {/* Endereço */}
            <ContactItem>
              <FaMapMarkerAlt size={16} />
              <div>
                Rua Junqueira Freire, 261<br />
                Liberdade - São Paulo
              </div>
            </ContactItem>

            {/* Telefone */}
            <ContactItem>
              <FaPhoneAlt size={16} />
              <div>(19) 99212-8375</div>
            </ContactItem>

            {/* Horário */}
            <ContactItem>
              <FaClock size={16} />
              <div>Seg a Sex: 9h às 18h</div>
            </ContactItem>
          </div>

          {/* Mapa Google Embed */}
          <GoogleMapsFrame
            title="Mapa Google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0043430247033!2d-46.63201968502146!3d-23.531653384693846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5854c34b3c99%3A0x528ad15dc7c0ea85!2sR.%20Junqueira%20Freire%2C%20261%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001503-000!5e0!3m2!1spt-BR!2sbr!4v1693841910912!5m2!1spt-BR!2sbr"
            width="250"
            height="100"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FooterContact>
        <SocialButtonsWrapper>
          <WhatsApp />
          <Instagram />
        </SocialButtonsWrapper>
      </FooterContainer>

      {/* Modais */}
      <Modal open={openModal === 'modal1'} onClose={handleClose} title="Quem Somos">
        <ModalContentWrapper>
          conteudo
        </ModalContentWrapper>
      </Modal>

      <Modal open={openModal === 'modal2'} onClose={handleClose} title="Obras Realizadas">
        conteudo
      </Modal>

      <Modal open={openModal === 'modal3'} onClose={handleClose} title="Tijolos Ecológicos">
        conteudo
      </Modal>

      <Modal open={openModal === 'modal4'} onClose={handleClose} title="Contato">
        conteudo
      </Modal>
    </DashboardWrapper>
  );
}

export default Dashboard;