import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Footer />
    </main>
  );
};

export default App;
