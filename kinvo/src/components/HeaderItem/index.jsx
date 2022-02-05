import React, { useEffect } from 'react';


import { HeaderItemContainer } from './styles'

function HeaderItem({title, value, iconName = 'kinvo'}) {
  
  const Icon = require(`../../assets/icons/${iconName}-icon.svg`)
  useEffect(()=> {
  }, [])
  
  return (
    <HeaderItemContainer>
      <img src={Icon} alt="" />
      <div>
        <h6>{ title }</h6>
        <p>{ value }</p>
      </div>
    </HeaderItemContainer>
  );
}

export default HeaderItem;