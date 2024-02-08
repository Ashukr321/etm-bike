import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

// Functional component for displaying statistics with CountUp animations
const CounterUp = () => {
  // State to control the start and stop of CountUp animations
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      {/* Apply ScrollTrigger to initiate CountUp animations on scroll */}
      <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
        {/* Statistics section with flex layout */}
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              {/* Statistic block for Users */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={2700} duration={1} delay={0} />}
                </h2>
                <p className=" text-slate-800 leading-relaxed">Users</p>
              </div>

              {/* Statistic block for Subscribes */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={470} duration={2} delay={0} />}k
                </h2>
                <p className="text-slate-800 leading-relaxed">Subscribes</p>
              </div>

              {/* Statistic block for Downloads */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={1200} duration={2} delay={0} />}
                </h2>
                <p className=" text-slate-800 leading-relaxed">Downloads</p>
              </div>

              {/* Statistic block for Products */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={15} duration={2} delay={0} />}
                </h2>
                <p className=" text-slate-800 leading-relaxed">Products</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

// Export the Statistic component for use in other parts of the application
export default CounterUp;