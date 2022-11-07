import React from "react";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainSection from "./MainSection";
import ColumnSection from "./ColumnSection";
import FourStepSection from "./FourStepSection";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

function Home() {
	return (
		<Element name="home">
			<MainSection />
			<ColumnSection />
			<FourStepSection />
			<AboutUs />
			<WhoWeHelp />
			<Contact />
		</Element>
	);
}

export default Home;
