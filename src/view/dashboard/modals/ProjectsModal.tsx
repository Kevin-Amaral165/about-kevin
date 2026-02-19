import React from 'react';
import Card from '../../../layout/card/card';
import image1 from '../../../layout/image/mqz.jpg';

interface ProjectsModalContentProps {
  selectedProject: string | null;
  onSelectProject: (key: string | null) => void;
}

const ProjectsModalContent: React.FC<ProjectsModalContentProps> = ({
  selectedProject,
  onSelectProject,
}) => {

  // 🔹 VISÃO INICIAL → DRAWERS
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
          altText="MQZ Engenharia"
          onClick={() => onSelectProject('mqz')}
        />

        <Card
          imageSrc={image1}
          label="Networking Dashboard"
          altText="Networking Dashboard"
          onClick={() => onSelectProject('networking')}
        />

        <Card
          imageSrc={image1}
          label="Shawarma Delivery"
          altText="Shawarma Delivery"
          onClick={() => onSelectProject('shawarma')}
        />

        <Card
          imageSrc={image1}
          label="Test"
          altText="Test"
          onClick={() => onSelectProject('test')}
        />
      </div>
    );
  }

  // 🔹 DETALHE DO PROJETO
  return (
    <div>
      {selectedProject === 'mqz' && (
        <>
          <h2>MQZ Engenharia</h2>
          <img src={image1} alt="MQZ Engenharia" style={{ width: '100%', borderRadius: 8 }} />
          <p>
            Projeto institucional desenvolvido para empresa do ramo de engenharia,
            com foco em apresentação de serviços e contato comercial.
          </p>
        </>
      )}

      {selectedProject === 'networking' && (
        <>
          <h2>Networking Dashboard</h2>
          <img src={image1} alt="Networking Dashboard" style={{ width: '100%', borderRadius: 8 }} />
          <p>
            Dashboard administrativo para controle de usuários, permissões
            e visualização de métricas.
          </p>
        </>
      )}

      {selectedProject === 'shawarma' && (
        <>
          <h2>Shawarma Delivery</h2>
          <img src={image1} alt="Shawarma Delivery" style={{ width: '100%', borderRadius: 8 }} />
          <p>
            Sistema completo de delivery com pedidos em tempo real,
            painel administrativo e controle de pedidos.
          </p>
        </>
      )}

      {selectedProject === 'test' && (
        <>
          <h2>Projeto Test</h2>
          <img src={image1} alt="Projeto Test" style={{ width: '100%', borderRadius: 8 }} />
          <p>
            Projeto experimental focado em testes de arquitetura,
            comunicação entre serviços e escalabilidade.
          </p>
        </>
      )}

      <button
        style={{ marginTop: 20 }}
        onClick={() => onSelectProject(null)}
      >
        ← Voltar para projetos
      </button>
    </div>
  );
};

export default ProjectsModalContent;