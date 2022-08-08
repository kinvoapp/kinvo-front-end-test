import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../styles/global';
import defaultTheme from '../../styles/themes/default';

import Header from '../header';
import Routes from '../../Routes';
import AsideMenu from '../asideMenu';

import { Container, Row, Col } from 'react-bootstrap';
import { ContainerGlobal } from './styles';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <ContainerGlobal>
                <div>
                    <BrowserRouter>
                        <div></div>
                        <div className="coluna-app"><Routes /></div>
                    </BrowserRouter>
                </div>
            </ContainerGlobal>
        </ThemeProvider>
    );
}

export default App;