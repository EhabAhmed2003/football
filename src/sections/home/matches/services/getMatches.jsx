export async function getMatches(date) {
	const response = await fetch(
		`https://api.football-data.org/v4/matches?date=${date}`,
		{
			headers: {
				"X-Auth-Token": process.env.X_Auth_Token,
			},
		},
	);
	if (!response.ok) {
		// حالات محددة
		if (response.status === 404) return {}; // مفيش مباريات
		if (response.status === 429)
			throw new Error("لقد تجاوزت الحد المسموح من الطلبات");
		throw new Error("حدث خطأ أثناء جلب المباريات");
	}
	const data = await response.json();
	if (data.errorCode) throw new Error(data.message);

	const groupedMatches = {};
	data?.matches?.forEach((match) => {
		groupedMatches[match?.competition?.name] ??= [];
		groupedMatches[match?.competition?.name].push(match);
	});
	console.log("groupedMatches:", groupedMatches);
	return groupedMatches;
}
