import React from 'react';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsBag } from 'react-icons/bs';
import { GiReturnArrow } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { BiWallet, BiDiamond } from 'react-icons/bi';
import { AiOutlineInteraction, AiOutlineFundProjectionScreen, AiOutlineLock } from 'react-icons/ai';
import { Container, Option, Card, CardColumn, Col, Texto, Divider } from './styles';

export default function SideNav() {
    return (
        <Container>
            <Option href='#'>
                <Card paddingTop='15px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <BiWallet />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Resumo</Texto>
                            <Texto size='12px'>Da Carteira</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b', justifySelf: 'flex-end' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
            <Option href='#'>
                <Card paddingTop='5px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <BsBag />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Meus</Texto>
                            <Texto size='12px'>Produtos</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
            <Option href='#'>
                <Card paddingTop='5px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <MdAttachMoney />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Meus</Texto>
                            <Texto size='12px'>Proventos</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
            <Option href='#'>
                <Card paddingTop='5px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <AiOutlineInteraction />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Classe</Texto>
                            <Texto size='12px'>de Ativos</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
            <Option href='#'>
                <Card paddingTop='5px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <BiDiamond />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Rentabilidade</Texto>
                            <Texto size='12px'>Real</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
            <Option href='#'>
                <Card paddingTop='5px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <AiOutlineFundProjectionScreen />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Projeção</Texto>
                            <Texto size='12px'>Da Carteira</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
            <Option href='#'>
                <Card paddingTop='5px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <GiReturnArrow />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Risco x</Texto>
                            <Texto size='12px'>Retorno</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
            <Option href='#'>
                <Card paddingTop='5px'>
                    <CardColumn>
                        <IconContext.Provider value={{ size: '1.3em', color: '#ffffff', style: { background: '#dae0e3', padding: '3px', borderRadius: '20px' } }}>
                            <AiOutlineLock />
                        </IconContext.Provider>
                        <Col>
                            <Texto size='12px'>Cobertura</Texto>
                            <Texto size='12px'>do FGC</Texto>
                        </Col>
                    </CardColumn>
                    <IconContext.Provider value={{ size: '0.6em', color: '#4c309b' }}>
                        <BsChevronRight />
                    </IconContext.Provider>
                </Card>
                <Divider />
            </Option>
        </Container>
    );
}
