import * as S from 'components/styled/lib';
import GlobalStyle from './globalStyles';
import FixedIncome from 'pages/FixedIncome';
import KinvoPremiumSideMenu from 'components/KinvoPremium/KinvoPremiumSideMenu/KinvoPremiumSideMenu';
import KinvoPremiumHeader from 'components/KinvoPremium/KinvoPremiumHeader/KinvoPremiumHeader';

function App() {
  return (
    <>
      <GlobalStyle />
      <S.KinvoPremiumWrapper>
        <KinvoPremiumHeader />
        <KinvoPremiumSideMenu />
        <FixedIncome />
      </S.KinvoPremiumWrapper>
    </>
  );
}

export default App;
