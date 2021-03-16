import { useState } from 'react';
import {
  Logo,
  Container,
  Options,
  OptionsContainer,
  SingleOptionIcon,
  SideMenu,
  Button,
} from './style';
import GroupedSingleOption from './singleOptions';
import { SnapshotPortfolio } from '../../ducks/inovice';

const LogoSrc = '/images/logo.svg';
const HamburguerMenuSrc = '/images/hamburguerMenu.svg';

export default function Header(props: { portfolio: SnapshotPortfolio }) {
  const { portfolio } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Container>
        <Logo src={LogoSrc} />
        <OptionsContainer>
          <Options>
            <GroupedSingleOption show={!showMenu} portfolio={portfolio} />
          </Options>
          <Button onClick={() => setShowMenu(!showMenu)}>
            <SingleOptionIcon src={HamburguerMenuSrc} />
          </Button>
        </OptionsContainer>
      </Container>
      <SideMenu show={showMenu}>
        <GroupedSingleOption show={showMenu} portfolio={portfolio} />
      </SideMenu>
    </>
  );
}
