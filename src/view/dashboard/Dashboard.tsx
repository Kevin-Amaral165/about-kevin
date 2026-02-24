// Core
import { useState } from 'react';
import { Typography } from 'antd';

// Layout
import Navigation from '../../layout/navigation/Navigation';
import Modal from '../../layout/modal/Modal';

// Styles
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

// Assets
import logo from '../../layout/image/foto1.jpeg';

// Icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Components
import WhatsApp from '../../layout/button/WhatsApp';
import Instagram from '../../layout/button/Instagram';
import GitHub from '../../layout/button/Github';
import LeftPanel from './leftPanel/LeftPanel';
import RightPanel from './rightPanel/RightPanel';
import ProjectsModalContent from './modals/ProjectsModal';

type ModalType = 'projects' | 'about' | 'contact' | null;

function Dashboard() {
  const [openModal, setOpenModal] = useState<ModalType>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleNavClick = (key: string) => {
    const modalKey = key as ModalType;
    setOpenModal(modalKey);

    if (modalKey === 'projects') {
      setSelectedProject(null);
    }
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const menuItems = [
    { key: 'projects', label: 'Projetos' },
    { key: 'about', label: 'Sobre' },
    { key: 'contact', label: 'Contato' },
  ];

  return (
    <DashboardWrapper>
      {/* Background Animation */}
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

            <Typography.Title
              level={3}
              style={{ color: 'white', marginLeft: 40, marginBottom: 0 }}
            >
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
            onCardClick={(projectKey: string) => {
              setSelectedProject(projectKey);
              setOpenModal('projects');
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
      <FooterContainer>
        <FooterInfo>
          <h4>Kevin Amaral</h4>
          <p>
            React, Next.js, TypeScript, Node.js, Python,
            PostgreSQL, MongoDB, Styled Components.
          </p>
        </FooterInfo>

        <FooterContact>
          <div>
            <ContactItem>
              <FaMapMarkerAlt size={16} />
              <div>São Paulo - SP</div>
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
        open={openModal === 'projects'}
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
        open={openModal === 'about'}
        onClose={handleClose}
        title="Sobre"
      >
        <p>
          Desenvolvedor Full Stack com foco em React, TypeScript e Node.js.
          Experiência na construção de aplicações modernas, escaláveis
          e orientadas a boas práticas.
        </p>
      </Modal>

      {/* MODAL CONTATO */}
      <Modal
        open={openModal === 'contact'}
        onClose={handleClose}
        title="Contato"
      >
        <p>Email: kevin_ramos1@hotmail.com</p>
        <p>Telefone: (19) 99212-8375</p>
        <p>Localização: São Paulo - SP</p>
      </Modal>
    </DashboardWrapper>
  );
}

export default Dashboard;