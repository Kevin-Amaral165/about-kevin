import { Steps, Typography } from 'antd';
import { UserOutlined, SolutionOutlined, ToolOutlined, ReadOutlined } from '@ant-design/icons';
import { WhiteSteps } from './Curriculum.style';

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

const Curriculum = () => {
  return (
    <div style={{ padding: '16px', background: '#403e3f', borderRadius: '8px' }}>
      <WhiteSteps current={4} direction="vertical" size="small">
        <Step
          title="Resumo Profissional"
          icon={<UserOutlined />}
          description={
            <Paragraph style={{ color: '#fff' }}>
              Desenvolvedor Fullstack com sólida formação em Automação Industrial e Desenvolvimento Web.
              Experiência no desenvolvimento de aplicações completas, atuando no front-end e back-end, com foco em performance, escalabilidade, qualidade e segurança.
              Excelente raciocínio lógico e busca contínua por aprimoramento.
            </Paragraph>
          }
        />

        {/* Experiência Profissional */}
        <Step
          title="Experiência Profissional"
          icon={<SolutionOutlined />}
          description={
            <div>
              <Text strong style={{ color: '#fff' }}>Desenvolvedor de Software - Pleno</Text>
              <br />
              <Text type="secondary" style={{ color: '#fff' }}>Junho 2023 - Setembro 2025 - Superior Industries</Text>
              <ul style={{ color: '#fff', paddingLeft: '20px' }}>
                <li>Desenvolvimento e manutenção de aplicações web (front-end e back-end).</li>
                <li>Criação e integração de APIs RESTful.</li>
                <li>Implementação de testes automatizados e garantia de qualidade do código.</li>
                <li>Colaboração com equipes de produto e design.</li>
                <li>Realização de manutenções preventivas e corretivas, garantindo segurança e alta performance.</li>
              </ul>
            </div>
          }
        />

        {/* Habilidades */}
        <Step
          title="Habilidades"
          icon={<ToolOutlined />}
          description={
            <div>
              <Paragraph style={{ color: '#fff' }}>
                 <Text strong style={{ color: '#fff' }}>Linguagens:</Text> TypeScript, Python, C#
              </Paragraph>
              <Paragraph style={{ color: '#fff' }}>
                <Text strong style={{ color: '#fff' }}>Frameworks & Bibliotecas:</Text> React, Flask, Jest, Styled Components, Next.js, Tailwind, .Net
              </Paragraph>
              <Paragraph style={{ color: '#fff' }}>
                <Text strong style={{ color: '#fff' }}>Ferramentas & Plataformas:</Text> Potsgres, Git, Docker, Postman, Figma
              </Paragraph>
            </div>
          }
        />

        {/* Formação */}
        <Step
          title="Formação"
          icon={<ReadOutlined />}
          description={
            <div>
              <Title level={5} style={{ color: '#fff' }}>Instituto Federal de São Paulo</Title>
              <Text strong style={{ color: '#fff' }}>Tecnologia em Automação Industrial</Text>
              <br />
              <Text type="secondary" style={{ color: '#fff' }}>Junho 2021 - Dezembro 2024 | Brasil</Text>

              <div>
                <Title level={5} style={{ color: '#fff' }}>PUC - Campinas</Title>
                <Text strong style={{ color: '#fff' }}>MBA em Arquitetura de Software, Ciência de Dados e Cibersegurança</Text>
                <br />
                <Text type="secondary" style={{ color: '#fff' }}>Novembro 2025 - Novembro 2026 | Brasil</Text>
              </div>
            </div>
          }
        />
      </WhiteSteps>
    </div>
  );
};

export default Curriculum;
