import React from "react";
import { Element } from "react-scroll";
import {Link} from "react-router-dom"

import decor from "../assets/Decoration.svg";
import shirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import magnifier from "../assets/Icon-3.svg";
import arrows from "../assets/Icon-4.svg";

function FourStepSection() {
	return (
		<Element name="four__step__section" className="four__step__container">
			<h2 className="four__step__title">Wystarczą 4 proste kroki</h2>
			<img src={decor} className="four__step__decor"></img>
			<div className="four__step__columns">
				<div className="single__step">
					<img src={shirt} className="four__step__img"/>
					<p className="four__step__name">Wybierz rzeczy</p>
					<div className="four__step__bar"></div>
					<p className="four__step__decs">ubrania, zabawki, sprzęt i inne</p>
				</div>
				<div className="single__step">
					<img src={bag} className="four__step__img"/>
					<p className="four__step__name">Spakuj je</p>
					<div className="four__step__bar"></div>
					<p className="four__step__decs">skorzystaj z worków na śmieci</p>
				</div>
				<div className="single__step">
					<img src={magnifier} className="four__step__img"/>
					<p className="four__step__name">Zdecyduj komu <br/>chcesz pomóc</p>
					<div className="four__step__bar"></div>
					<p className="four__step__decs">wybierz zaufane miejsce</p>
				</div>
				<div className="single__step">
					<img src={arrows} className="four__step__img"/>
					<p className="four__step__name">Zamów kuriera</p>
					<div className="four__step__bar"></div>
					<p className="four__step__decs">wybierz zaufane miejsce</p>
				</div>
			</div>
			<Link to="/login" className="four__step__btn">oddaj<br/> rzeczy</Link>
		</Element>
	);
}

export default FourStepSection;
