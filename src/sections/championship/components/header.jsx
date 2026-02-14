import React from "react";
import SelectSeason from "./selectSeason";

function ChampionshipHeader() {
	return (
		<header>
			<div>
				<div>
					<h2>Laliga</h2>
				</div>
				<div>
					<SelectSeason />
				</div>
			</div>
			<div></div>
		</header>
	);
}

export default ChampionshipHeader;
