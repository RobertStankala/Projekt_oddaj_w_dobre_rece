import React from "react";

import Footer from "./Footer";

import { Element } from "react-scroll";

import decor from "../assets/Decoration.svg";
import fb from "../assets/Facebook.svg";
import insta from "../assets/Instagram.svg";

function Contact() {

	return (
		<Element name="contact" className="contact__container">
				<div className="contact__content">
					<h2 className="contact__title">Skontaktuj się z nami</h2>
					<img src={decor} className="contact__decor" />
					<form className="contact__form">
						<div className="contact__form__top">
							<div className="contact__form__name">
								<label className="contact__form__label" >Wpisz swoje imię</label>
								<input type="text" className="contact__form__input" placeholder="Krzysztof" />
							</div>
							<div className="contact__form__email">
								<label className="contact__form__label">Wpisz swój email</label>
								<input type="text"  className="contact__form__input" placeholder="abc@xyz.pl"/>
							</div>
						</div>
						<div className="contact__form__bottom">
							<label className="contact__form__label">Wpisz swoją wiadomość</label>
							<textarea type="text" rows="5" className="contact__form__input" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
						</div>
					</form>
					<button className="contact__btn">wyślij</button>
				</div>
				<div className="contact__footer">
					<span>Copyright by Coders Lab</span>
					<div className="contact__icons">
						<img className="contact__fb" src={fb} />
						<img className="contact__insta"  src={insta} />
					</div>
				</div>
		</Element>
	);
}

export default Contact;
