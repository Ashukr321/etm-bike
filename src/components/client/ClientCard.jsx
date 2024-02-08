import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './Client_card.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const ClientCard = ({name,logo}) => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <Stack className='client_card'   p={2} borderRadius={2} data-aos="zoom-in">
      <Box sx={{display:"flex",}} justifyContent={"center"} alignItems={"center"} width={"200px"} mb={2} >
        <img src={logo} alt="" style={{width:"100%",objectFit:"contain", aspectRatio:"1/1", borderRadius:"12px"}}/>
      </Box>
      <Typography textAlign={"center"} width={"100%"} fontSize={20} variant="body1" color="initial">{name}</Typography>
    </Stack>
  )
}

export default ClientCard