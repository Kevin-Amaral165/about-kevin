import React, { useState } from 'react';
import Card from '../../../layout/card/card';
import image1 from '../../../layout/image/mqz.jpg';
import networkDashoboardImage from '../modals/images/dashboard_portfolio.png';
import netwokLoginImage from '../modals/images/login_portfolio.png';
import networkFormImage from '../modals/images/form_portfolio.png';
import crusherImage from '../modals/images/crusher.jpg';
import shawarmaImage from '../modals/images/shawarmaImage.png';

interface ProjectsModalContentProps {
  selectedProject: string | null;
  onSelectProject: (key: string | null) => void;
}

const ProjectsModalContent: React.FC<ProjectsModalContentProps> = ({
  selectedProject,
  onSelectProject,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const networkingImages = [
    networkDashoboardImage,
    netwokLoginImage,
    networkFormImage,
  ];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === networkingImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? networkingImages.length - 1 : prev - 1
    );
  };

  /* ========================
     VISÃO INICIAL (CARDS)
  ======================== */

  if (!selectedProject) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}
      >
        <Card
          imageSrc={image1}
          label="MQZ Engenharia"
          onClick={() => onSelectProject('mqz')}
        />

        <Card
          imageSrc={networkDashoboardImage}
          label="Networking Dashboard"
          onClick={() => onSelectProject('networking')}
        />

        <Card
          imageSrc={shawarmaImage}
          label="Shawarma Delivery"
          onClick={() => onSelectProject('shawarma')}
        />

        <Card
          imageSrc={crusherImage}
          label="Monitoring System – Superior Industries"
          onClick={() => onSelectProject('crusher')}
        />
      </div>
    );
  }

  /* ========================
     DETALHE DO PROJETO
  ======================== */

  return (
    <div>
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <h2 style={{ margin: 0 }}>
          {selectedProject === 'networking'
            ? 'Networking Dashboard'
            : selectedProject === 'mqz'
            ? 'MQZ Engenharia'
            : selectedProject === 'shawarma'
            ? 'Shawarma Delivery – Arabic Food Delivery Platform'
            : selectedProject === 'crusher'
            ? 'Monitoring System – Rolls & Crusher | Superior Industries'
            : 'Projeto'}
        </h2>

        <button
          onClick={() => onSelectProject(null)}
          style={{
            background: '#1677ff',
            border: 'none',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          ← Voltar
        </button>
      </div>

      {/* ========================
         NETWORKING (COM SLIDER)
      ======================== */}
      {selectedProject === 'networking' && (
        <>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                height: '60vh',
                maxHeight: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                background: '#111',
                borderRadius: 8,
              }}
            >
              <img
                src={networkingImages[currentImage]}
                alt="Networking"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  transition: '0.3s',
                }}
              />
            </div>

            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                top: '50%',
                left: 10,
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                top: '50%',
                right: 10,
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ›
            </button>
          </div>

          <p style={{ marginTop: 15 }}>
            Dashboard administrativo completo com controle de usuários,
            permissões, gráficos e monitoramento em tempo real.
          </p>
        </>
      )}

      {/* ========================
         OUTROS PROJETOS
      ======================== */}
      {selectedProject !== 'networking' && (
        <>
          <div
            style={{
              width: '100%',
              height: '60vh',
              maxHeight: '500px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              background: '#111',
              borderRadius: 8,
            }}
          >
            <img
              src={
                selectedProject === 'crusher'
                  ? crusherImage
                  : selectedProject === 'shawarma'
                  ? shawarmaImage
                  : image1
              }
              alt={selectedProject || 'project'}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          <p style={{ marginTop: 15 }}>
            {selectedProject === 'mqz' &&
              'Projeto institucional desenvolvido para empresa do ramo de engenharia.'}

            {selectedProject === 'shawarma' &&
              'Plataforma web para delivery de comida árabe, desenvolvida para gerenciamento de pedidos, cardápio e experiência do cliente. O projeto encontra-se atualmente em fase de desenvolvimento e expansão de funcionalidades.'}

            {selectedProject === 'crusher' &&
              'Atuação no desenvolvimento do sistema web corporativo para monitoramento de rolos transportadores e equipamentos de britagem (crusher), aplicado em ambiente industrial na Superior Industries. O projeto envolveu construção de interfaces para visualização de dados operacionais, métricas de desempenho e acompanhamento técnico de equipamentos. Por questões de confidencialidade e direitos corporativos, não é possível divulgar detalhes técnicos ou acesso ao sistema.'}
          </p>
        </>
      )}
    </div>
  );
};

export default ProjectsModalContent;