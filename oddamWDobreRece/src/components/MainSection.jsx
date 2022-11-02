import React from "react";
import { Link } from "react-router-dom";

import decor from "../assets/Decoration.svg";

function MainSection() {
	return <div className="main__container">
		<img className="main__img" src="./src/assets/Home-Hero-Image.jpg" />
		<div className="main__content">
			<h1 className="main__title">Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
			<img src={decor} className="main__decor"></img>
			<div className="main__buttons">
				<Link to="/login" className="btn">oddaj rzeczy</Link>
				<Link to="/login" className="btn">zorganizuj zbiórkę</Link>
			</div>
			</div>
	</div>;
}

export default MainSection;
