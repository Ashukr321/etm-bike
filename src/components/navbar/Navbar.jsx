import React from "react";
import {
  Typography,
  Stack,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  Hidden,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import logo from "../../assets/logo.png";

import "./Navbar.css";
const Navbar = () => {
  // Check if the screen width is smaller than 768px
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  // State to manage the drawer open/close status
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Open the drawer
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // Close the drawer
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Handle click on a mobile menu item
  const handleDrawerItemClick = () => {
    // Close the drawer when a mobile menu item is clicked
    handleDrawerClose();
  };

  return (
    <div>
      {/* Top navigation stack */}
      <Stack
        backgroundColor="black"
        direction={"row"}
        alignItems={"center"}
        padding={"2px 24px"}
        justifyContent={"space-between"}
        sx={{ color: "white" }}
      >
        {/* Brand/logo */}
        <Box>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </Box>

        {/* Navigation buttons (visible on larger screens) */}
        <Hidden smDown>
          <Box>
            <ButtonGroup>
              <Link to="/">
                <Button
                  sx={{ color: "#f3e5f5", fontSize: "1.1rem" }}
                  variant="none"
                >
                  Home
                </Button>
              </Link>

              <Link to="/service">
                <Button
                  sx={{ color: "#f3e5f5", fontSize: "1.1rem" }}
                  variant="none"
                >
                  services
                </Button>
              </Link>

              {/* <Link to="/product">
                <Button
                  sx={{ color: "#f3e5f5", fontSize: "1.1rem" }}
                  variant="none"
                >
                  product
                </Button>
              </Link> */}
              <Link to="/client">
                <Button
                  sx={{ color: "#f3e5f5", fontSize: "1.1rem" }}
                  variant="none"
                >
                  client
                </Button>
              </Link>
            </ButtonGroup>

            <ButtonGroup>
            <Link to="https://wa.me/7004246315" marginLeft={2} >
              <Button
                variant="contained"
                color="warning"
                sx={{ color: "#f3e5f5", fontSize: "1.1rem" }}
              >
                Connect <WhatsAppIcon color="success" />
              </Button>
            </Link>

            <Link to="/enquiry" >
              <Button
                variant="contained"
                color="info"
                sx={{ color: "#f3e5f5", fontSize: "1.1rem" }}
              >
              Rent Now<ContactPageIcon color="error"/>
              </Button>
            </Link>
            </ButtonGroup>
          </Box>
        </Hidden>



        {/* Mobile menu button (visible on smaller screens) */}
        {isSmallScreen && (
          <Box>
            <IconButton
              sx={{ color: "white" }}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            {/* Drawer for mobile navigation */}
            <Drawer
              anchor="left"
              padding="20px 30px"
              open={drawerOpen}
              onClose={handleDrawerClose}
              backgroundColor="seconday"
            >


              <List>
                {/* Mobile navigation items */}
                <Link to="/" style={{ textDecoration: "none" }}>
                  <ListItem
                    button
                    justifyContent="center"
                    onClick={handleDrawerItemClick}
                  >
                    <Home marginLeft={"20px"}></Home>
                    <Typography
                      margin={"0 20px"}
                      variant="overline"
                      color="secondary"
                    >
                      home
                    </Typography>
                  </ListItem>
                </Link>
                <Link to="/service" style={{ textDecoration: "none" }}>
                  <ListItem
                    button
                    justifyContent="center"
                    onClick={handleDrawerItemClick}
                  >
                    <InfoIcon marginLeft={"20px"}></InfoIcon>
                    <Typography
                      margin={"0 20px"}
                      variant="overline"
                      color="secondary"
                    >
                      services
                    </Typography>
                  </ListItem>
                </Link>
                {/* <Link to="/product" style={{ textDecoration: "none" }}>
                  <ListItem
                    button
                    justifyContent="center"
                    onClick={handleDrawerItemClick}
                  >
                    <ContactMailIcon marginLeft={"20px"}></ContactMailIcon>
                    <Typography
                      margin={"0 20px"}
                      variant="overline"
                      color="secondary"
                    >
                      product
                    </Typography>
                  </ListItem>
                </Link> */}

                {/* Add more Link components for other pages */}
              </List>
            </Drawer>
          </Box>
        )}
      </Stack>
    </div>
  );
};

export default Navbar;
