import React from "react";
import { useState } from "react";
import { Element } from "react-scroll";
import {data} from "../../data/Data";

import decor from "../assets/Decoration.svg";

function WhoWeHelp() {

	const [activeTab, setActiveTab] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(3);



	return (
	<Element name="who__we__help" className="help__container">
		<h2 className="help__title">Komu pomagamy?</h2>
		<img src={decor} className="help__img"/>

		<div className="help__tabs">
        <button
		className="help__btn"
		style={{ border: activeTab === 1 ? "0.75px solid #3C3C3C" : "none" }}
          onClick={() => {
            setCurrentPage(1);
            setActiveTab(1);
          }}
        >
          Fundacjom
        </button>
        <button
		className="help__btn"
          style={{ border: activeTab === 2 ? "0.75px solid #3C3C3C" : "none" }}
          onClick={() => {
            setCurrentPage(1);
            setActiveTab(2);
          }}
        >
          Organizacjom pozarządowym
        </button>
        <button
		className="help__btn"
		style={{ border: activeTab === 3 ? "0.75px solid #3C3C3C" : "none" }}
          onClick={() => {
            setCurrentPage(1);
            setActiveTab(3);
          }}
        >
          Lokalnym zbiórkom
        </button>
		</div>
		<div className="help__lists">
			<div className="help__lists__container">
			{data[activeTab - 1]
				.slice(perPage * currentPage - perPage, perPage * currentPage)
				.map((element) => {
				return( 
					<div className="lists__single">
						<div className="lists__single__left">
							<h2 className="lists__single__title" key={element.id} >{element.name}</h2>
							<p className="lists__single__desc">{element.decs}</p>
						</div>
						<p className="lists__single__right">{element.gifts}</p>
					</div>
				);
				})}
			</div>
			<div className="pagination">
			{Array(Math.ceil(data[activeTab - 1].length / perPage))
				.fill(1)
				.map((element, index) => {
				return (
					<button className="pagination__btn" onClick={() => setCurrentPage(index + 1)}
					style={{ border: currentPage === index + 1 ? "0.75px solid #3C3C3C" : "none"}}>
					{index + 1}
					</button>
				);
				})}
			</div>
		</div>
	</Element>
	);
}

export default WhoWeHelp;
