import React from 'react'
import styles from './styles.module.scss'
import marca from '../../assets/marca.svg'

const Header: React.FC = () => (
  <>
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={marca} />
        <nav>
          <a href='#'>Saldo bruto</a>

          <a href=''>Valor aplicado</a>
          <a href='#'>Rentabilidade</a>

          <a href=''>Carteira</a>
        </nav>
      </div>
    </header>
  </>
)
export default Header
