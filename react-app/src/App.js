import styled from 'styled-components';
import './App.css';
import logo from './assets/logoPremium.png';
import HeaderCard from './components/HeaderCard';
import DehazeIcon from '@mui/icons-material/Dehaze';
import NorthIcon from '@mui/icons-material/North';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <CardWrapper>
          <HeaderCard
            title={'saldo bruto'}
            subtitle={'130.521.230,02'}
            icon={<AttachMoneyIcon />}
          />
          <HeaderCard
            title={'valor aplicado'}
            subtitle={'521.230,02'}
            icon={<NorthIcon />}
          />
          <HeaderCard
            title={'rentabilidade'}
            subtitle={'2,34%'}
            icon={<NorthEastIcon />}
          />
          <HeaderCard
            title={'carteira'}
            color={'#5D41AC'}
            subtitle={'Minha Carteira'}
            icon={<ExpandMoreIcon />}
          />
          <ButtonWrapper>
            <DehazeIcon style={{ color: '#FFF' }} />
          </ButtonWrapper>
        </CardWrapper>
      </Header>
      <Sidebar />
    </div>
  );
}

const Header = styled.div`
width: 100%;
height: 130px;
display: flex;
background-color: #fff;
align-items: center;
position: sticky;   
top: 0;
box-shadow: 0 1px 5px #9c9db94d;
`;

const Logo = styled.image`
background-position: center;
background-image: url(${logo});
background-repeat: no-repeat;
object-fit: contain;
height: 100%;
width: 400px;
display: table;
float: left;
`;

const CardWrapper = styled.div`
display: flex;
justify-content: end;
width: 100%;
`;

const ButtonWrapper = styled.div`
background-color: #5D41AC;
border-radius: 50%;
width: 35px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
margin: 7px;
margin-right: 100px;
`;

export default App;
