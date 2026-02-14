import MatchesSkeleton from "@/sections/home/matches/components/matchesSkeleton";
import MatchesSection from "@/sections/home/matches/matchesSection";
import { Suspense } from "react";

export default async function Home({ searchParams }) {
	const params = await searchParams;
	const date = params.date ?? new Date().toISOString().split("T")[0];
	return (
		<main className="flex max-w-full items-center justify-center bg-background text-foreground font-sans dark:bg-background mb-8 lg:mb-0">
			<div className="w-full gap-5 mt-10 grid lg:grid-cols-5 grid-cols-1 ">
				<div className="col-span-5 md:col-span-2">
					<Suspense key={date} fallback={<MatchesSkeleton />}>
						<MatchesSection date={date} />
					</Suspense>
				</div>
				<div className="md:col-span-3 md:hidden">
					<></>
				</div>
			</div>
		</main>
	);
}
