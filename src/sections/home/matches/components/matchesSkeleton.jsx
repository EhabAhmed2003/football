import React from "react";

function MatchesSkeleton() {
	return (
		<div className="w-full flex flex-col gap-2">
			<div className="lg:hidden flex justify-between w-full items-center">
				<div className="w-40 bg-card animate-pulse h-10 rounded-md"></div>
				<div className="w-40 bg-card animate-pulse h-10 rounded-md"></div>
			</div>
			{Array.from({ length: 10 }).map((_, i) => (
				<div
					key={i}
					className="lg:hidden flex items-center justify-center p-4 rounded-xl bg-card animate-pulse"
				>
					{/* Team 1 */}
					<div className="flex items-center gap-3 w-2/5">
						<div className="h-4 w-24 bg-muted rounded-md"></div>
						<div className="w-8 h-8 rounded-full bg-muted"></div>
					</div>

					{/* Score */}
					<div className="h-5 w-12 bg-muted rounded-md"></div>

					{/* Team 2 */}
					<div className="flex items-center gap-3 w-2/5 justify-end">
						<div className="w-8 h-8 rounded-full bg-muted"></div>
						<div className="h-4 w-24 bg-muted rounded-md"></div>
					</div>
				</div>
			))}
			<div className="hidden lg:flex flex-col gap-2 w-full h-100 items-center justify-center">
				<div className="w-10 h-10 border-2 border-transparent animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
					<div className="w-6 h-6 border-2 border-transparent animate-spin border-t-red-400 rounded-full"></div>
				</div>
			</div>
		</div>
	);
}

export default MatchesSkeleton;
