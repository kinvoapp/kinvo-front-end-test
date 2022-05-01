import React, { useEffect, useState } from 'react'

import UserValues from './UserValues'
import api from '../../api/api'

import { Head, DivHead } from './style'

import jewel from '../../assets/jewel-icon.svg'
import arrow from '../../assets/arrow-icon.svg'
import breakArrow from '../../assets/break-arrow-icon.svg'
import arrow2 from '../../assets/arrow-icon-2.svg'
import menu from '../../assets/menu-icon.svg'

import logo from '../../images/logo.svg'

const Header = () => {

  const [dataRendaFixa, setDataRendaFixa] = useState([])

    useEffect(() => {

        api.get('')
            .then(( res ) => {

                let { snapshotByProduct } = res.data.data

                setDataRendaFixa(snapshotByProduct)

                console.log(res.data.data)
            })
        
    }, [])

  return (

    <Head>
      <img src={logo} />
      <DivHead>
        <UserValues icon={jewel} 
                    title="SALDO BRUTO" 
                    amount="123.122,00"
        />
        <UserValues icon={arrow} 
                    title="VALOR APLICADO" 
                    amount="123.122,00"
        />
        <UserValues icon={breakArrow} 
                    title="RENTABILIDADE" 
                    amount="123.122,00"
        />
        <UserValues icon={arrow2} 
                    title="CARTEIRA" 
                    amount="Minha Carteira"
        />
        <img src={menu}/>
      </DivHead>
    </Head>
  )
}

export default Header