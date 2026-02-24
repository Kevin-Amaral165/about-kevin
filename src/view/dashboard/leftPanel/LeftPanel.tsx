import { Row, Col, Typography, Button, Card } from 'antd';
import {
  BuildOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons';
const casa1 = 'https://via.placeholder.com/400x250?text=Casa+Ecologica';
import type { JSX } from 'react';

const { Title, Paragraph } = Typography;

const LeftPanel = (): JSX.Element => {
  return (
    <div style={{ padding: '20px' }}>
      {/* HERO SECTION */}
      <Row gutter={24} align="top" style={{ marginBottom: '20px' }}>
        <Col xs={24} md={12}>
          <Title level={1}>Realizamos seu projeto com eficiência, inovação e sustentabilidade</Title>
          <Paragraph>
            Construímos residências com alto padrão de qualidade, uso de técnicas ecológicas como tijolos de solo-cimento e foco total na satisfação do cliente. Com nossa experiência, cada detalhe importa.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            href="https://wa.me/5519993590707"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicite um Orçamento
          </Button>
        </Col>
        <Col xs={24} md={12}>
         <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '10px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              height: 250
            }}
          >
            <img
                src={casa1}
                alt="Imagem da casa"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
              />
          </div>
        </Col>
      </Row>

      {/* NOSSOS DIFERENCIAIS */}
      <Title level={2} style={{ marginBottom: '16px' }}>Nossos Diferenciais</Title>
      <Row gutter={16}>
        {[
          {
            title: 'Sustentabilidade',
            icon: <BuildOutlined style={{ fontSize: 28 }} />,
            description: 'Reduzir impacto ambiental, economizar recursos e preservar o futuro com práticas responsáveis.',
          },
          {
            title: 'Experiência',
            icon: <ToolOutlined style={{ fontSize: 28 }} />,
            description: '5 anos de experiência garantindo eficiência, sustentabilidade e excelência em cada projeto realizado.',
          },
          {
            title: 'Tecnologia',
            icon: <BuildOutlined style={{ fontSize: 28 }} />,
            description: 'Utilizamos tecnologia BIM para otimizar projetos, garantindo precisão, eficiência e melhor experiência ao cliente.',
          },
          {
            title: 'Dedicação',
            icon: <UserOutlined style={{ fontSize: 28 }} />,
            description: 'Projetos personalizados com acompanhamento completo e gerenciamento eficiente do início ao fim. ',
          },
        ].map(({ title, icon, description }) => (
          <Col xs={24} md={6} key={title} style={{ display: 'flex' }}>
            <Card
              hoverable
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                background: '#46810c',
                color: 'fff',
              }}
            >
              <div style={{ marginBottom: 16, color: 'white' }}>{icon}</div>
              <Title style={{ color: 'white' }} level={4}>{title}</Title>
              <Paragraph style={{ color: 'white' }}>{description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default LeftPanel;