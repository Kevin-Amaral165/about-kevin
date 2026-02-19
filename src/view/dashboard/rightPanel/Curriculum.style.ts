import styled from 'styled-components';
import { Steps } from 'antd';

export const WhiteSteps = styled(Steps)`
  .ant-steps-item-title,
  .ant-steps-item-description,
  .ant-steps-item-icon {
    color: #fff !important;
  }

  .ant-steps-item-description {
    padding: 20 !important;
  }

  .ant-typography {
    margin: 0 !important;
  }

  .ant-steps-item-content {
    padding: 10 !important;
    margin: 10 !important;
  }
`;
