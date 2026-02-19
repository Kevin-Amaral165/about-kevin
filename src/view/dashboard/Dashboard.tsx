import { useState } from 'react';
import Navigation from '../../layout/navigation/Navigation';
import Modal from '../../layout/modal/Modal';
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
  Circles,
} from './Dashboard.style';
import logo from '../../layout/image/foto1.jpeg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import WhatsApp from '../../layout/button/WhatsApp';
import Instagram from '../../layout/button/Instagram';
import { Typography } from 'antd';
import GitHub from '../../layout/button/Github';
import LeftPanel from './leftPanel/LeftPanel';
import RightPanel from './rightPanel/RightPanel';
import ProjectsModalContent from './modals/ProjectsModal';

function Dashboard() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleNavClick = (modalKey: string) => {
    setOpenModal(modalKey);

    // Se clicar em Projetos pelo menu
    if (modalKey === 'modal1') {
      setSelectedProject(null); // abre mostrando os 4 drawers
    }
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const menuItems = [
    { key: 'modal1', label: 'Projetos' },
    { key: 'modal2', label: 'Sobre' },
    { key: 'modal4', label: 'Contato' },
  ];

  return (
    <DashboardWrapper>
      <Circles>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </Circles>

      {/* HEADER */}
      <HeaderContainer>
        <LeftContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LogoContainer>
              <img src={logo} alt="Kevin Amaral" />
            </LogoContainer>
            <Typography.Title level={3} style={{ color: 'white', marginLeft: 70 }}>
              Kevin Amaral
            </Typography.Title>
          </div>
        </LeftContainer>

        <RightContainer>
          <Navigation
            onNavClick={handleNavClick}
            selectedKey={openModal}
            menuItems={menuItems}
          />
        </RightContainer>
      </HeaderContainer>

      {/* MAIN */}
      <MainContent>
        <LeftContent>
          <LeftPanel
            onCardClick={(projectKey) => {
              setSelectedProject(projectKey); // seleciona projeto
              setOpenModal('modal1');         // abre modal Projetos
            }}
          />
        </LeftContent>

        <RightContentWrapper>
          <RightPanelContainer>
            <RightPanel />
          </RightPanelContainer>
        </RightContentWrapper>
      </MainContent>

      {/* FOOTER */}
      <FooterContainer style={{ padding: '10px 20px' }}>
        <FooterInfo>
          <h4>Kevin Amaral</h4>
          <p>
            React, Next.js, TypeScript, JavaScript, Node.js, Python,
            PostgreSQL, MongoDB, Styled Components, HTML, CSS.
          </p>
        </FooterInfo>

        <FooterContact>
          <div>
            <ContactItem>
              <FaMapMarkerAlt size={16} />
              <div>São Paulo</div>
            </ContactItem>

            <ContactItem>
              <FaPhoneAlt size={16} />
              <div>(19) 99212-8375</div>
            </ContactItem>

            <ContactItem>
              <FaEnvelope size={16} />
              <div>kevin_ramos1@hotmail.com</div>
            </ContactItem>
          </div>

          <GoogleMapsFrame
            title="Mapa Google"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="250"
            height="100"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FooterContact>

        <SocialButtonsWrapper>
          <WhatsApp />
          <Instagram />
          <GitHub />
        </SocialButtonsWrapper>
      </FooterContainer>

      {/* MODAL PROJETOS */}
      <Modal
        open={openModal === 'modal1'}
        onClose={handleClose}
        title="Projetos"
      >
        <ModalContentWrapper>
          <ProjectsModalContent
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </ModalContentWrapper>
      </Modal>

      {/* MODAL SOBRE */}
      <Modal
        open={openModal === 'modal2'}
        onClose={handleClose}
        title="Sobre"
      >
        Conteúdo sobre você aqui.
      </Modal>

      {/* MODAL CONTATO */}
      <Modal
        open={openModal === 'modal4'}
        onClose={handleClose}
        title="Contato"
      >
        Informações de contato aqui.
      </Modal>
    </DashboardWrapper>
  );
}

export default Dashboard;