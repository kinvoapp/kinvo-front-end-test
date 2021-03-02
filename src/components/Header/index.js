import React from 'react';
import { IconContext } from 'react-icons';
import { GiSwapBag } from 'react-icons/gi';
import { FaArrowUp, FaChevronDown, FaBars } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { Container, Img, Div, Card, Titulo, Texto, Col, Icon } from './styles';
import Logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <Container>
            <Img src={Logo} />
            <Div>
                <Card>
                    <IconContext.Provider value={{ size: '1.8em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                        <GiSwapBag />
                    </IconContext.Provider>
                    <Col>
                        <Texto size='8px'>SALDO BRUTO</Texto>
                        <Titulo size='16px'>130.521.230,02</Titulo>
                    </Col>
                </Card>
                <Card>
                    <IconContext.Provider value={{ size: '1.8em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                        <FaArrowUp />
                    </IconContext.Provider>
                    <Col>
                        <Texto size='8px'>VALOR APLICADO</Texto>
                        <Titulo size='16px'>521.230,02</Titulo>
                    </Col>
                </Card>
                <Card>
                    <IconContext.Provider value={{ size: '1.8em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                        <BsGraphUp />
                    </IconContext.Provider>
                    <Col>
                        <Texto size='8px'>RENTABILIDADE</Texto>
                        <Titulo size='16px'>2,34%</Titulo>
                    </Col>
                </Card>
                <Card>
                    <IconContext.Provider value={{ size: '1.8em', color: '#ffffff', style: { background: '#4c309b', padding: '5px', borderRadius: '20px' } }}>
                        <FaChevronDown />
                    </IconContext.Provider>
                    <Col>
                        <Texto size='8px'>CARTEIRA</Texto>
                        <Titulo size='16px'>Minha Carteira</Titulo>
                    </Col>
                </Card>
                <Icon>
                    <IconContext.Provider value={{ size: '1.8em', color: '#ffffff', style: { background: '#4c309b', padding: '5px', borderRadius: '20px' } }}>
                        <FaBars />
                    </IconContext.Provider>
                </Icon>
            </Div>
        </Container>
    );
}
