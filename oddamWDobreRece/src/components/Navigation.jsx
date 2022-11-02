import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import { Link as SLink } from "react-scroll";


function Navigation() {
	return (
		<div className="nav__container">
			<div className="nav__log">
				<ul className="nav__log__ul">
					<Link to="/login" className="nav__log__in">Zaloguj</Link>
					<Link to="/register" className="nav__log__create">Załóż konto</Link>
				</ul>
			</div>
			<div className="nav__sections">
				<ul className="nav__sections__ul">
					<Link to="/" className="nav__sections__li">Start</Link>
					<li className="nav__sections__li"><SLink to="four__step__section" spy={true} smooth={true}>O co chodzi</SLink></li>
					<li className="nav__sections__li"><SLink to="about" spy={true} smooth={true}>O nas</SLink></li>
					<li className="nav__sections__li"><SLink to="who__we__help" spy={true} smooth={true}>Fundacja i organizacje</SLink></li>
					<li className="nav__sections__li"><SLink to="contact" spy={true} smooth={true}>Kontakt</SLink></li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
