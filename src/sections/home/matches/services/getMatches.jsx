export async function getMatches(date) {
	const response = await fetch(
		`https://api.football-data.org/v4/matches?date=${date}`,
		{
			headers: { "X-Auth-Token": process.env.X_Auth_Token },
			cache: "no-store",
		},
	);

	if (!response.ok) {
		if (response.status === 404) return {};
		if (response.status === 429)
			throw new Error("You have exceeded the limit on Requests");
		throw new Error("An error occurred while fetching matches");
	}

	const data = await response.json();

	if (data.errorCode) throw new Error(data.message);

	const groupedMatches = {};

	data?.matches?.forEach((match) => {
		const compName = match?.competition?.name || "Other";
		groupedMatches[compName] ??= [];
		groupedMatches[compName].push(match);
	});

	return groupedMatches;
}
