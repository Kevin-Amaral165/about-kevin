import React from 'react';
import Card from '../../../layout/card/card';
import image1 from '../../../layout/image/mqz.jpg';

interface LeftPanelProps {
  onCardClick: (projectKey: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onCardClick }) => {
  return (
    <div
      style={{
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        height: '100%',
      }}
    >
      <Card
        imageSrc={image1}
        label="MQZ Engenharia"
        onClick={() => onCardClick('mqz')}
      />

      <Card
        imageSrc={image1}
        label="Networking Dashboard"
        onClick={() => onCardClick('networking')}
      />

      <Card
        imageSrc={image1}
        label="Shawarma Delivery"
        onClick={() => onCardClick('shawarma')}
      />

      <Card
        imageSrc={image1}
        label="Test"
        onClick={() => onCardClick('test')}
      />
    </div>
  );
};

export default LeftPanel;