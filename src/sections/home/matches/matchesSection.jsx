import React, { Suspense } from "react";
import MatchesHeader from "./components/header";
import MatchesList from "./components/matchesList";
import MatchesSkeleton from "./components/matchesSkeleton";
import MatchesListWithError from "./components/matchesListWithError";

export default function MatchesSection({ date }) {
	return (
		<section className="custom-scroll relative w-full h-full lg:max-h-400 overflow-y-auto lg:pr-1">
			<MatchesHeader date={date} />

			<div className="flex flex-col gap-2 text-card-foreground">
				<Suspense fallback={<MatchesSkeleton />}>
					<MatchesListWithError date={date} />
				</Suspense>
			</div>
		</section>
	);
}
