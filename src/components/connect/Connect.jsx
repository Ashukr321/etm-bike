import React from 'react';
import './Connect.css';
import { Stack, Typography, Box } from '@mui/material';
import calling from '../../assets/calling.jpeg';

const Connect = () => {
  return (
    // Main Stack container for the component
    <Stack>
      {/* First Stack for the heading and information */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        gap={5}
        textAlign={{ xs: 'center', md: 'center' }}
        p={{ xs: 5, md: 10 }}
        justifyContent={{ xs: 'center', md: 'center' }}
        alignItems={{ xs: 'center', md: 'center' }}
        backgroundColor="#FFF"
      >
        {/* Box for the heading */}
        <Box width={{ xs: '100%', md: '50%' }}>
          <Typography variant="h2" className='connect_head' color="initial">
            ETM CONNECT
          </Typography>
        </Box>

        {/* Box for the information */}
        <Box width={{ xs: '100%', md: '50%' }}>
          <p color="initial" className='connect_info'>
            One app for everything ETM. Connect to the scooter, charger, and the cloud to access information & features remotely.
          </p>
        </Box>
      </Stack>

      {/* Second Stack for the image */}
      <Stack p={2} backgroundColor="#FFF">
        {/* Image */}
        <img src={calling} alt="connect_image" style={{ width: '100%', borderRadius: '12px' }} />
      </Stack>
    </Stack>
  );
};

export default Connect;
