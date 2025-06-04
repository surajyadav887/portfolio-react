import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Herosection from "./Component/Herosection/Herosection";
import Footer from "./Component/Footer/Footer";
import Technology from "./Component/Technology/Technology";
import Aboutdeveloper from "./Component/aboutdevelopers/Aboutdevelopers";
import Servicesprovider from "./Component/servicesprovides/Servicesprovider";
import ServicesSection from "./Component/ServicesSection/ServicesSection";
import Testomonials from "./Component/Testomonials/Testomonials";
import Projectsidea from "./Component/Projectsidea/Projectsidea";
import Ourprojects from "./Component/Ourprojects/Ourprojects";
import ContactUs from "./Component/ContactUs/ContactUs";
import Enquiry from "./Component/Enquiry/Enquiry";
import OurMoto from "./Component/Ourmoto/Ourmoto";
// import Developerskills from './Component/Developerskills/Developerskills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      {/* <Developerskills/> */}
      <Technology />
      <Servicesprovider />
      <ServicesSection />
      <Projectsidea/>
      <Ourprojects/>
      <Aboutdeveloper />
      <Testomonials />
      <ContactUs/>
      <Enquiry/>
      <OurMoto />
      <Footer />
    </div>
  );
};

export default App;
