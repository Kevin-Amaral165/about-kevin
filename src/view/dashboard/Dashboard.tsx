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