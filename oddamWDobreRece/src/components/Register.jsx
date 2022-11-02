import React from "react";
import {Link} from "react-router-dom";

import decor from "../assets/Decoration.svg";

function Register() {
	return (
		<div className="register__container">
			<h2 className="register__title">Załóż konto</h2>
			<img src={decor} className="register__img" />
			<form className="register__form">
				<label className="register__label">Email</label>
				<input type="email" className="register__input" />
				<label className="register__label">Hasło</label>
				<input type="password" className="register__input" />
				<label className="register__label">Powtórz hasło</label>
				<input type="password" className="register__input" />
			</form>
			<div className="register__buttons">
				<Link to="/login" className="register__buttons__register">
				Zaloguj się
				</Link>
				<button type="submit" className="register__buttons__login">
					Załóż konto
				</button>
			</div>
		</div>
	);
}

export default Register;
