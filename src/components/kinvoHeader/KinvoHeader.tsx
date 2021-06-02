import SvgIcon from '@components/svgIcon/SvgIcon';
import { currencyFormatter } from '@utils/currencyHelper';
import React from 'react';
import { informationContent } from './KinvoHeader.data';
import { Container, Informations, Info, Title, Value, InfoContent, Menu } from './KinvoHeader.styles';

const KinvoHeader = () => (
  <Container>
    <SvgIcon src="public/assets/svg/kinvologo.svg" fill="purple700" height={30} width={100} />
    <Informations>
      {informationContent.map(information => (
        <Info>
          <SvgIcon src={information.icon} width={32} height={32} />
          <InfoContent>
            <Title>{information.title}</Title>
            <Value>{information.value ? currencyFormatter(information.value) : `${information.percentage}%`}</Value>
          </InfoContent>
        </Info>
      ))}
      <Menu>
        <SvgIcon src="./public/assets/svg/user-menu-toggle-button-icon.svg" width={32} height={32} />
      </Menu>
    </Informations>
  </Container>
);

export default KinvoHeader;
