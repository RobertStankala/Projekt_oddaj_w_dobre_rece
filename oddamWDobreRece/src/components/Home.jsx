import React from "react";Footer
import Navigation from "./Navigation";
import MainSection from "./MainSection";
import ColumnSection from "./ColumnSection";
import FourStepSection from "./FourStepSection";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
	return <div>
        <Navigation />
        <MainSection />
        <ColumnSection />
        <FourStepSection />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
        <Footer />
    </div>;
}

export default Home;
