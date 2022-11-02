import React from "react";
import { Element } from "react-scroll";

import decor from "../assets/Decoration.svg";
import sign from "../assets/Signature.svg";

function AboutUs() {
	return (
		<Element name="about" className="about__container">
			<div className="about__content">
				<h3 className="about__title">O nas</h3>
				<img src={decor} className="about__decor"/>
				<p className="about__desc">
					Nori grape silver beet broccoli kombu beet greens fava bean
					potato quandong celery. Bunya nuts black-eyed pea prairie
					turnip leek lentil turnip greens parsnip.
				</p>
				<img src={sign} className="about__sign" />
			</div>
			<div className="about__people"></div>
		</Element>
	);
}

export default AboutUs;
