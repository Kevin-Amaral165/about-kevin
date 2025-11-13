import React from 'react';
import Card from '../../../layout/card/card';
import image1 from '../../../layout/image/mqz.jpg';

interface LeftPanelProps {
  onCardClick: (key: string) => void;

}

const LeftPanel: React.FC<LeftPanelProps> = ({ onCardClick }) => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ width: '50%', height: '50%'}}>
        <Card
          imageSrc={image1}
          altText="MQZ Engenharia"
          label="MQZ Engenharia"
          onClick={() => onCardClick('projetos')}
        />
      </div>
      <div style={{ width: '50%', height: '50%'}}>
        <Card
          imageSrc={image1}
          altText="Networking Dashboard"
          label="Networking Dashboard"
          onClick={() => onCardClick('projetos')}
        />
      </div>
    </div>
  );
};

export default LeftPanel;
