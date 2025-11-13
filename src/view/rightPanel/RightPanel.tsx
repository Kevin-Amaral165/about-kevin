import {Typography , Card, Steps, Collapse, Carousel, Avatar } from 'antd';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const RightPanel = () => {
  return (
    <div style={{ padding: '12px' }}>

         {/* COMO TRABALHAMOS */}
      <Title level={2} style={{ marginBottom: '20px' }}>Como Trabalhamos</Title>
      <Steps responsive={true} direction="horizontal" current={3} style={{ marginBottom: '20px', maxWidth: 800 }}>
        <Step title="Briefing" description="Entendemos suas necessidades." />
        <Step title="Projeto" description="Desenvolvemos seu projeto personalizado." />
        <Step title="Execução" description="Fazemos a gestão ou acompanhamento da sua obrao." />
        <Step title="Entrega" description="Entregamos o seu lar do seu jeitinho." />
      </Steps>

      {/* FAQ */}
      <Title level={2} style={{ marginBottom: '20px' }}>Perguntas Frequentes</Title>
      <div style={{ minHeight: 220 }}>
        <Collapse
          accordion
          style={{ marginBottom: '20px', maxWidth: 800 }}
          items={[
            {
              key: '1',
              label: 'Vocês trabalham com projetos personalizados?',
              children: <Paragraph>Sim! Desenvolvemos projetos totalmente personalizados, com acompanhamento e gerenciamento completos para garantir o melhor resultado.</Paragraph>,
            },
            {
              key: '2',
              label: 'O que é tijolo ecológico?',
              children: <Paragraph>Tijolo ecológico é um bloco com 2 furos, utilizado para construção civil, para construção de residências, que quando utilizados da forma certa de construção temos uma maior economia. Ele é considerado ecológico, pois na sua produção ele é prensado e não queimado, isso o torna ecológico.</Paragraph>,
            },
            {
              key: '3',
              label: 'O tijolo ecológico traz mesmo uma economia? Pois, o milheiro do tijolo é mais caro que o tijolo baiano.',
              children: <Paragraph>Sim, o tijolo ecológico, ele tende a ter uma redução de custo quando se utilizado de alto portante (estrutural), e deixando o máximo de paredes do próprio tijolo a vista, somente passando hidrofugante, e rejunte entre os tijolos. Utilizando do tijolo como estrutural, faz com que quase zere a utilização de madeira, diminua a utilização de cimento, e ferragem consideravelmente.</Paragraph>,
            },
            {
              key: '4',
              label: 'Qual o tempo médio de uma obra residencial?',
              children: (
                <Paragraph>
                  O tempo de uma construção com <strong>tijolo ecológico</strong> depende do tamanho da obra, da equipe disponível e do nível de acabamento desejado. Mas, em geral, ela costuma ser <strong>mais rápida que alvenaria convencional</strong>, porque:
                  <div style={{ marginLeft: '1.5rem' }}>
                    <ul>
                      <li>Os tijolos são encaixados (sistema de encaixe macho-fêmea), reduzindo o uso de argamassa;</li>
                      <li>A parte hidráulica e elétrica pode ser embutida durante a execução, sem precisar quebrar paredes depois;</li>
                      <li>As paredes ficam mais alinhadas, diminuindo a necessidade de reboco grosso.</li>
                      <li><strong>Obras bem planejadas</strong> (com projeto executivo e logística de materiais) podem ser até <strong>30% mais rápidas</strong> que o tijolo comum, já que os blocos são modulares, dispensam reboco em algumas partes e reduzem etapas.</li>
                    </ul>
                  </div>
                  👉 <strong>Em média, uma casa térrea de 100 a 150 m² pode levar de 4 a 6 meses para ser concluída</strong>, já incluindo a parte de acabamentos. Em obras maiores ou de dois pavimentos, esse prazo pode chegar a <strong>8 a 12 meses</strong>.
                </Paragraph>
              ),
            },
          ]}
        />
      </div>

      {/* DEPOIMENTOS */}
      <Title level={2} style={{ marginBottom: '20px' }}>Depoimentos de Clientes</Title>
      <Carousel autoplay dots style={{ maxWidth: 800 }}>
        <div style={{ borderRadius: 12, overflow: 'hidden', maxWidth: 600, margin: '0 auto' }}>
            <Card>
            <Card.Meta
                avatar={<Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />}
                title="Maria Fernandes"
                description="Profissionais incríveis! Minha casa foi entregue antes do prazo e com acabamento impecável. Recomendo muito."
            />
            </Card>
        </div>
        <div style={{ borderRadius: 12, overflow: 'hidden', maxWidth: 600, margin: '0 auto' }}>
            <Card>
            <Card.Meta
                avatar={<Avatar src="https://randomuser.me/api/portraits/men/22.jpg" />}
                title="João Lima"
                description="Atendimento personalizado do início ao fim. Fiquei impressionado com a qualidade e o comprometimento."
            />
            </Card>
        </div>
        <div style={{ borderRadius: 12, overflow: 'hidden', maxWidth: 600, margin: '0 auto' }}>
            <Card>
            <Card.Meta
                avatar={<Avatar src="https://randomuser.me/api/portraits/women/68.jpg" />}
                title="Carla Souza"
                description="Obra limpa, organizada e dentro do orçamento. Um ótimo investimento. Parabéns à equipe!"
            />
            </Card>
        </div>
        </Carousel>

    </div>
  );
};

export default RightPanel;