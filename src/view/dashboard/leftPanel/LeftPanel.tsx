import React from 'react';
import Card from '../../../layout/card/card';
import image1 from '../../../layout/image/mqz.jpg';
import networkingDashboardImage from '../modals/images/dashboard_portfolio.png';
import crusherImage from '../modals/images/crusher.jpg';
import shawarmaImage from '../modals/images/shawarmaImage.png';

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
        imageSrc={networkingDashboardImage}
        label="Networking Dashboard"
        onClick={() => onCardClick('networking')}
      />

      <Card
        imageSrc={shawarmaImage}
        label="Shawarma Delivery"
        onClick={() => onCardClick('shawarma')}
      />

      <Card
        imageSrc={crusherImage}
        label="Monitoring Dashboard Superior Industries"
        onClick={() => onCardClick('crusher')}
      />
    </div>
  );
};

export default LeftPanel;