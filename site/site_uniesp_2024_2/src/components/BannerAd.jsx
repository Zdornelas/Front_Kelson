import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

// Componente estilizado do MUI para exibir um banner de propaganda
const StyledBannerAd = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '24px',
  borderRadius: '8px',
  overflow: 'hidden',


})

const BannerAd = () => {
  return <StyledBannerAd>
      <img 
      src='./VESTIBULAR.gif'
      alt='Banner do Vestibular'
      style={{ width:'100%', height:'300px', borderRadius:'8px'}}
      />
     </StyledBannerAd>
}

export default BannerAd