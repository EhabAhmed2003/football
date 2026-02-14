import React from "react";
import CompetitionBlock from "./competitionBlock";

function MatchesList({ groupedMatches }) {
	return (
		<>
			{Object.entries(groupedMatches || {}).map(([competition, matches]) => {
				return (
					<CompetitionBlock
						key={competition}
						competition={competition}
						matches={matches}
					/>
				);
			})}
		</>
	);
}

export default MatchesList;
