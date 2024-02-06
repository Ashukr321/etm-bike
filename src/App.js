import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Client,
  Connect,
  CounterUp,
  Feature,
  Footer,
  Hero,
  Navbar,
  Product,
  Service,
  Team,
} from "./components";
import Home from "./Home";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <>
      <Router>
        {/* navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* features */}
          <Route path="/feautre" element={<Feature />} />

          {/* counterup */}
          <Route path="/counter" element={<CounterUp />} />

          {/* services */}
          <Route path="/service" element={<Service />} />

          {/* product */}
          <Route path="/product" element={<Product />} />

          {/* our teams */}
          <Route path="/team" element={<Team />} />

          {/* connect */}
          <Route path="/connect" element={<Connect />} />

          {/* our client */}
          <Route path="/client" element={<Client />} />

          {/* footer */}
          <Route path="/footer" element={<Footer />} />

          {/* pages */}
          <Route path="/pricing" element={<Pricing />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
