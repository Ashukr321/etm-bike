import React from 'react'
import './Connect.css'
import{Stack, Typography,Box} from '@mui/material'
import calling from '../../assets/calling.jpeg'
const Connect = () => {
  return (
    <Stack>
      <Stack direction={"row"} gap={5} textAlign={"center"} p={10} justifyContent={"center"} alignItems={"center"}  backgroundColor={"#FFf"}>
        <Box width={"50%"}>
          <Typography variant="H2" className='connect_head'  color="initial">ETM CONNECT</Typography>
        </Box>

        <Box>
          <p  color="initial" className='connect_info'>One app for everything ETM. Connect to the scooter, charger and the cloud to access information & features remotely.</p>
        </Box>
      </Stack>
      <Stack p={2}>
        <img src={calling} alt="" />
      </Stack>
    </Stack>
  )
}

export default Connect