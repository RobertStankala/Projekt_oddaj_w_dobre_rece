import React from "react";
import { Element } from "react-scroll";

import decor from "../assets/Decoration.svg"

function WhoWeHelp() {
	return <Element name="who__we__help" className="help__container">
		<h2>Komu pomagamy?</h2>
		<img src={decor} />
	</Element>;
}

export default WhoWeHelp;
