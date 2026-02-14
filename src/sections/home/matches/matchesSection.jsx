import React, { Suspense } from "react";
import MatchesHeader from "./components/header";
import MatchesList from "./components/matchesList";
import { getMatches } from "./services/getMatches";
import MatchesSkeleton from "./components/matchesSkeleton";

async function MatchesSection({ date }) {
	const groupedMatches = await getMatches(date);
	return (
		<section className="custom-scroll relative w-full h-full lg:max-h-400 overflow-y-auto lg:pr-1">
			<MatchesHeader date={date} />
			<div className=" flex flex-col gap-2 text-card-foreground">
					<MatchesList groupedMatches={groupedMatches} />
				
			</div>
		</section>
	);
}

export default MatchesSection;
