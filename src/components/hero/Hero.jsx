import { Button, Stack ,Typography} from "@mui/material";
import React from "react";

import './Hero.css'
const Hero = () => {
  return (
    <>
      <Stack  className="hero">
        <h1 className="hero_heading">ETM BIKE </h1>
        <p>One app for everything ETM. Connect to the <span>cooter, charger and the cloud to access information</span> s & features remotely.</p>
      </Stack>
    </>
  );
};

export default Hero;
