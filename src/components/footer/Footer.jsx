import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';
import { Button, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-black dark:bg-gray-900 p-5 md:p-10">
        <div className="mx-auto w-full max-w-screen-xl py-4 lg:py-8">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Logo and Company Info */}
            <div style={{ width: "100%" }} className="md:w-1/2 md:mb-0 mb-8">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-16 md:h-32 me-3" alt="ETM Logo" />
              </Link>
              <p className="mb-4 text-sm md:text-base" style={{ width: "100%" }}>
                Eleric Automotive Pvt. Ltd. is a startup recognized and
                registered under Start-up India, Department of Industries and
                Govt. of Bihar. Co-Working Studio, Yaman Enclave, Near Sai
                Corporate Park, Rukanpura, Patna, Bihar 801506.
              </p>
            </div>

            {/* Footer Links */}
            <div style={{ width: "100%" }} className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* ETM Section */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
                  ETM
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="/" className="hover:underline">
                      <Button size="small">Our Story</Button>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
                  LEGAL
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="/" className="hover:underline">
                      <Button size="small">Terms & Conditions</Button>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/" className="hover:underline">
                      <Button size="small">Privacy Policy</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      <Button size="small">Refund Policy</Button>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
                  Quick Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <Link to="/" className="hover:underline">
                      <Button size="small">Home</Button>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="hover:underline">
                      <Button size="small">Rent and Own</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="hover:underline">
                      <Button size="small">Pricing</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/* Copyright and Social Icons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="mb-4 text-xs text-gray-500 sm:text-base sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link
                to="https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/"
                className="hover:underline"
                target="_blank"
              >
                Ashutosh Kumar
              </Link>
              . All Rights Reserved.
            </span>

            {/* Social Icons */}
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Link to="https://www.facebook.com/etmbikes" target="_blank">
                <IconButton sx={{ color: "white", bgcolor: "whitesmoke" }}>
                  <FacebookIcon color="info" />
                </IconButton>
              </Link>

              <Link to="https://www.instagram.com/etmbikes/" target="_blank">
                <IconButton sx={{ color: "white", bgcolor: "whitesmoke" }}>
                  <InstagramIcon color="warning" />
                </IconButton>
              </Link>

              <Link to="mailto:info@navomeshstavya.in" target="_blank">
                <IconButton sx={{ color: "white", bgcolor: "whitesmoke" }}>
                  <EmailIcon color="success" />
                </IconButton>
              </Link>

              <Link to="/" target="_blank">
                <IconButton sx={{ color: "white", bgcolor: "whitesmoke" }}>
                  <CallIcon color="success" />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
