import { Stack } from "@mui/material";
import './Hero.css';
import vd from './intro.mp4';

const Hero = () => {
  return (
    <>
      <Stack className="hero">
        {/* Background Video */}
        <video className="hero-video" controls   loop>
          <source src={vd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <h1 className="hero_heading">ETM BIKE </h1>
        <p>One app for everything ETM. Connect to the <span>scooter, charger and the cloud to access information</span> & features remotely.</p>
      </Stack>
    </>
  );
};

export default Hero;
