import React from "react";
import { Link as SLink } from "react-scroll";

function Navigation() {
	return (
		<div className="nav__container">
			<div className="nav__log">
				<ul className="nav__log__ul">
					<li className="nav__log__in"><SLink to="/">Zaloguj</SLink></li>
					<li className="nav__log__create"><SLink to="/">Załóż konto</SLink></li>
				</ul>
			</div>
			<div className="nav__sections">
				<ul className="nav__sections__ul">
					<li className="nav__sections__li"><SLink to="/">Start</SLink></li>
					<li className="nav__sections__li"><SLink to="/">O co chodzi</SLink></li>
					<li className="nav__sections__li"><SLink to="/">O nas</SLink></li>
					<li className="nav__sections__li"><SLink to="/">Fundacja i organizacje</SLink></li>
					<li className="nav__sections__li"><SLink to="/">Kontakt</SLink></li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
