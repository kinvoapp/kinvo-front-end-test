import React from 'react'
import styles from './styles.module.scss'

import carteira from '../../assets/carteira.png'
import produtos from '../../assets/produtos.png'
import proventos from '../../assets/proventos.png'
import classe_ativos from '../../assets/classe_ativos.png'

//import sidebar css from react-pro-sidebar module and our custom css
import { IoIosArrowForward } from 'react-icons/io'

const List: React.FC = () => (
  <>
    <div className={styles.container}>
      <ul>
        <li className={styles.buttonMenu}>
          <div className={styles.iconMenu}>
            <img width='45px' src={carteira} alt='' />
            Resumo da <br /> carteira
          </div>

          <div>
            <IoIosArrowForward size='12' />{' '}
          </div>
        </li>

        <li className={styles.buttonMenu}>
          <div className={styles.iconMenu}>
            <img width='45px' src={produtos} alt='' />
            Meus <br /> Produtos
          </div>
          <div>
            <IoIosArrowForward size='12' />{' '}
          </div>
        </li>

        <li className={styles.buttonMenu}>
          <div className={styles.iconMenu}>
            <img width='45px' src={proventos} alt='' />
            Meus <br /> Produtos
          </div>
          <div>
            <IoIosArrowForward size='12' />{' '}
          </div>
        </li>

        <li className={styles.buttonMenu}>
          <div className={styles.iconMenu}>
            <img width='45px' src={classe_ativos} alt='' />
            Meus <br /> Proventos
          </div>
          <div>
            <IoIosArrowForward size='12' />{' '}
          </div>
        </li>
        <li className={styles.buttonMenu}>
          <div className={styles.iconMenu}>
            <img width='45px' src={carteira} alt='' />
            Classe de <br /> Ativos
          </div>
          <div>
            <IoIosArrowForward size='12' />{' '}
          </div>
        </li>
        <li className={styles.buttonMenu}>
          <div className={styles.iconMenu}>
            {/* <img width='45px' src={carteira} alt='' /> */}
            Ação
          </div>
          <div>
            <IoIosArrowForward size='12' />{' '}
          </div>
        </li>
      </ul>
    </div>
  </>
)
export default List
