import React from 'react'

import { Box, Title, Amount } from './style'

const UserValues = ( props ) => {

  return(

    <Box>
      <img src={props.icon} />
      <div>
        <Title>{props.title}</Title>
        <Amount>{props.amount}</Amount>
      </div>
    </Box>
  )
}

export default UserValues