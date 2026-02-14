import React from "react";
import MatchesList from "./matchesList";
import { getMatches } from "../services/getMatches";

export default async function MatchesListWithError({ date }) {
	try {
		const groupedMatches = await getMatches(date);
		if (!Object.keys(groupedMatches).length) {
			return (
				<div className="text-center text-gray-500 py-10">
					there aren't matches today
				</div>
			);
		}

		return <MatchesList groupedMatches={groupedMatches} />;
	} catch (error) {
		return (
			<div className="text-center text-red-500 py-10">
				{error.message || "حدث خطأ أثناء تحميل المباريات"}
			</div>
		);
	}
}
