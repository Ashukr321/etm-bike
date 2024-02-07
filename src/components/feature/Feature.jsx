import React from "react";
import "./Feature.css";
import { Stack, Typography, Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MemoryIcon from "@mui/icons-material/Memory";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <Stack className="feature" padding={6} textAlign={"center"}>
      <Typography variant="h3" fontWeight={700}>
        WHY ETM
      </Typography>

      <section>

        <div class="container  mx-auto">
          <div class="text-center mb-20">
            <p
              class="text-base leading-relaxed w-full xl:w-2/4 lg:w-3/4 mx-auto "
              style={{ color: "#000" }}
            >
              "ETM Harmony: Unite, Charge, Connect – Your One-Stop App for
              Cooter Control, Cloud Access, and Remote Features!"
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <div class="flex flex-wrap  -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class=" md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* logo_icons */}
                <ShoppingBagIcon sx={{ fontSize: "2rem" }} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-5">
                  Easy Booking
                </h2>
                <p class="leading-relaxed mb-8 text-base w-full text-black ">
                  Choose from the widest range of electric scooters that best
                  fits your commute. Enter your details to view the estimated
                  date of delivery and you are done!
                </p>
                <Link class="mt-3 inline-flex items-center">
                  <Button  style={{borderRadius:'50px'}} variant="contained" size="medium" color="warning">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* logo icons */}
                <LocalOfferIcon sx={{ fontSize: "2rem" }} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Tailored Pricing
                </h2>
                <p class="leading-relaxed mb-6 text-base w-full text-black">
                  Custom plans according to your company's utility. Even if you
                  are a small merchant or an E-Commerce giant, or any service
                  industry professional serving at doorsteps.
                </p>
                <Link class="mt-3 inline-flex items-center">
                  <Button style={{borderRadius:'50px'}} variant="contained" size="medium" color="warning">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* logo icons */}
                <MemoryIcon sx={{ fontSize: "2rem" }} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  S.M.A.R.T
                </h2>
                <p class="leading-relaxed   text-base w-full text-black">
                  Self Monitoring, Analysis, and Reporting Technology enabled.
                  The entire fleet is equipped with IoT and AI technology so you
                  can track and verify the status of conveyances.
                </p>
                <Link class="mt-3 inline-flex items-center">
                  <Button style={{borderRadius:'50px'}} variant="contained" size="medium" color="warning">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* logo icons */}
                <LocalPoliceIcon sx={{ fontSize: "2rem" }} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900  text-lg title-font font-medium mb-3">
                  Secure & Reliable
                </h2>
                <p class="leading-relaxed mb-4 text-base w-full text-black">
                  Security for our services is a crucial concern for us, as it
                  plays an important part in quality, performance, and
                  availability.
                </p>
                <Link class="mt-3 inline-flex items-center">
                  <Button style={{borderRadius:'50px'}} variant="contained" size="medium" color="warning">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>
    </Stack>
  );
};

export default Feature;
