import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ClientCard from './ClientCard';
import client from '../../data/client';
import './Client.css';

const Client = () => {
  return (
    <Stack p={6} alignItems="center">
      <Box >
        <Typography variant="h4" p={4} textAlign={"center"} letterSpacing={".1em"} textTransform={"uppercase"} fontWeight={"bold"} color="initial">Our Clients</Typography>
      </Box>
      <Stack  width={"100%"} flexWrap={"wrap"} alignItems={"center"}  justifyContent={"center"} gap={6} direction={"row"}>
        {
          client.map((data, index) => (
            <ClientCard key={index} name={data.name} logo={data.logo} />
          ))
        }
      </Stack>
    </Stack>
  );
};

export default Client;
