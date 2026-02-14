import { format } from "date-fns";
import Image from "next/image";
import React from "react";

function MatchCard({ match }) {
	const matchEnded = match?.status.toLowerCase() === "finished";

	return (
		<React.Fragment key={match.id}>
			<div className="px-2 md:px-4 py-4 rounded flex justify-center items-center bg-card">
				<div className="text-xs w-5/12 text-left flex flex-row-reverse items-center gap-2">
					<Image
						src={match?.homeTeam?.crest}
						alt="flag"
						width={25}
						height={25}
					/>
					<span>{match?.homeTeam?.shortName || "Unknown"}</span>
				</div>

				<div className="w-20 md:w-25 text-center text-xs">
					{!matchEnded && (
						<p className="lowercase text-sm">
							{format(new Date(match?.utcDate), "hh:mm a")}
						</p>
					)}
					{matchEnded && (
						<div className="relative">
							<p className="absolute -top-5 left-6/12 -translate-x-6/12 lowercase mb-2">
								{match?.status}
							</p>

							<div className="flex gap-1.5 justify-center">
								<span>{match?.score?.fullTime?.home}</span>
								<span>-</span>
								<span>{match?.score?.fullTime?.away}</span>
							</div>
						</div>
					)}
				</div>

				<div className="text-xs w-5/12 text-center flex justify-start items-center gap-2">
					<Image
						src={match?.awayTeam?.crest}
						alt="flag"
						width={25}
						height={25}
					/>
					{match?.awayTeam?.shortName || "Unknown"}
				</div>
			</div>
		</React.Fragment>
	);
}

export default MatchCard;
