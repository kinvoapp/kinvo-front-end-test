import React from 'react';

// Styles
import { Icon, StatusItem } from './styles';

// Interfaces
import { WalletStatus } from '../../interfaces/WalletStatus.interface';

const WalletStatusItem: React.FC<WalletStatus> = (props: WalletStatus) => {
  const { img, title, info } = props;

  return (
    <>
      <StatusItem>
        <Icon img={img} />
        <div className="statusInfo">
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
      </StatusItem>
    </>
  );
};

export default WalletStatusItem;
