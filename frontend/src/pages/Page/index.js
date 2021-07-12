import './style.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { ReactComponent as Grafico} from '../../assets/Menu.svg';

function App() 
{
  return (
    <div>
      <Header className="header"/>
      <Menu className="menu"/>
      <h1>Renda Fixa</h1>
      <Grafico/>
    </div>
  );
}


export default App;
