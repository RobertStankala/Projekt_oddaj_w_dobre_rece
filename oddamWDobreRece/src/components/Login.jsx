import React from "react";
import { Link } from "react-router-dom";

import decor from "../assets/Decoration.svg";

function Login() {
	return(
	<div className="login__container">
		<h2 className="login__title">Zaloguj się</h2>
		<img src={decor} className="login__img" />
		<form className="login__form">
			<label className="login__label">Email</label>
			<input type="email" className="login__input" />
			<label className="login__label">Hasło</label>
			<input type="password" className="login__input" />
		</form>
		<div className="login__buttons">
			<Link to="/register" className="login__buttons__register">
				Załóż konto
			</Link>
			<button type="submit" className="login__buttons__login">
				Zaloguj się
			</button>
		</div>
	</div>
	);
}

export default Login;
