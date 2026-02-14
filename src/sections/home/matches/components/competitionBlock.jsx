import Image from "next/image";
import React from "react";
import MatchCard from "./matchCard";

function CompetitionBlock({ key, competition, matches }) {
	return (
		<div className="flex flex-col gap-1" key={key}>
			<div className="flex justify-between pl-2 pr-4 items-center bg-card py-2 text-sm rounded">
				<div className="flex gap-2 items-center">
					<Image
						src={matches[0]?.competition?.emblem}
						alt={"flag"}
						width={25}
						height={25}
					/>
					<h4 className="font-semibold text-xs lg:w-11/12 w-full">
						{competition}
					</h4>
				</div>
				<ul className="hidden md:flex list-none justify-between gap-2 text-xs ">
					<li>Scores</li>
					<li>Standings</li>
					<li>News</li>
				</ul>
			</div>
			{matches.map((match) => {
				return <MatchCard key={match.id} match={match} />;
			})}
		</div>
	);
}

export default CompetitionBlock;
