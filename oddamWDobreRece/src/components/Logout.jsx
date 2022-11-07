import React from "react";
import { Link } from "react-router-dom";

import decor from "../assets/Decoration.svg";

function Logout() {
	return (
		<div className="logout__container">
			<h2 className="logout__title">Wylogowanie nastąpiło pomyślnie!</h2>
			<img src={decor} className-="logout__img"/>
			<Link to="/" className="logout__btn">Strona główna</Link>
		</div>
	);
}

export default Logout;
