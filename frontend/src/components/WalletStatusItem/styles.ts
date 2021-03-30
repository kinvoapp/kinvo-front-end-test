import styled from 'styled-components';

import { WalletStatusImg } from '../../interfaces/WalletStatus.interface';

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 16px;
    margin-top: 2px;
  }
`;

export const Icon = styled('div')<WalletStatusImg>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #dae0e3 url(${props => props.img}) center no-repeat;
  margin-right: 10px;
`;
