import React from "react";
import decor from "../assets/Decoration.svg";
import shirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import magnifier from "../assets/Icon-3.svg";
import arrows from "../assets/Icon-4.svg";

function FourStepSection() {
	return (
		<div>
			<h2 className="four__step__title">Wystarczą 4 proste kroki</h2>
			<img src={decor} className="four__step__decor"></img>
			<div className="four__step__columns">
				<div>
					<img src={shirt} />
					<p>Wybierz rzeczy</p>
					<div></div>
					<p>ubrania, zabawki, sprzęt i inne</p>
				</div>
				<div>
					<img src={bag} />
					<p>Spakuj je</p>
					<div></div>
					<p>skorzystaj z worków na śmieci</p>
				</div>
				<div>
					<img src={magnifier} />
					<p>Zdecyduj komu chcesz pomóc</p>
					<div></div>
					<p>wybierz zaufane miejsce</p>
				</div>
				<div>
					<img src={arrows} />
					<p>Zamów kuriera</p>
					<div></div>
					<p>wybierz zaufane miejsce</p>
				</div>
			</div>
			<button>oddaj rzeczy</button>
		</div>
	);
}

export default FourStepSection;
