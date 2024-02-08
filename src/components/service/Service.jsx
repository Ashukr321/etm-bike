import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import service from "../../data/service";
import ServiceCard from "./ServiceCard";
const Service = () => {
  return (
    <Stack>
      <Box
        p={6}
        sx={{ display: "flex" }}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h3" mb={2} fontWeight={"bold"} letterSpacing={".1em"}  color="initial">
          Our Services
        </Typography>
        <Typography letterSpacing={2} fontWeight={"bold"} textAlign={"center"} color="initial">
          Daily, Weekly, Monthly, Annually - We've Got Plans For All Your Needs
        </Typography>
      </Box>
      <Stack p={4} flexWrap={"wrap"} gap={3} alignItems={"center"} direction={"row"} justifyContent={"center"}>
        {service.map((p, index) => (
          <ServiceCard key={index} product_title={p.title} product_image={p.img} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Service;
