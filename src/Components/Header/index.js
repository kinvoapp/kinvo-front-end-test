import React from 'react';
import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';
import { ReactComponent as Sign } from '../../assets/sign.svg';
import { ReactComponent as Rent } from '../../assets/rentabilidade.svg';
import { ReactComponent as Valor } from '../../assets/valor.svg';
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';
import { ReactComponent as Align } from '../../assets/align-justify.svg';

export default function Header () {
    return (
        <header className={styles.container} id='header'>
            <a href=""><img src={Logo} alt="Logo Kinvo"/></a>

            <div className={styles.menu}>
                <div className={styles.group}>
                    <a href="#"><Sign stroke='var(--white)'/></a>
                    
                    <div className={styles.title}>
                        <p>SALDO BRUTO</p>
                        <h1>130.521.230,02</h1>
                    </div>
                </div>
                <div className={styles.group}>
                    <a href="#"><Valor stroke='var(--white)'/></a>
                    
                    <div className={styles.title}>
                        <p>VALOR APLICADO</p>
                        <h1>130.521.230,02</h1>
                    </div>
                </div>
                <div className={styles.group}>
                    <a href="#"><Rent stroke='var(--white)'/></a>
                    
                    <div className={styles.title}>
                        <p>RENTABILIDADE</p>
                        <h1>130.521.230,02</h1>
                    </div>
                </div>

                <div className={styles.groupDown}>
                    <a href="#"><ChevronDown stroke='var(--white)'/></a>
                    
                    <div className={styles.titleDown}>
                        <p>CARTEIRA</p>
                        <h1>Minha Carteira</h1>
                    </div>
                </div>
                <div className={styles.groupDown}>
                    <a href="#"><Align stroke='var(--white)'/></a>
                </div>
            </div>
        </header>
    )
}