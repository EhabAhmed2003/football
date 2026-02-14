import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMatchesByDate = createAsyncThunk(
	`matches/getMatchesByDate`,
	async (selectedDate) => {
		const res = await fetch(
			`https://api.football-data.org/v4/matches?date=${selectedDate}`,
			{
				headers: {
					"X-Auth-Token": "887aa36f91be4013af8e11ba2bc5a4de",
				},
			},
		);
		const response = await res.json();
		console.log("response", response);
		return response;
	},
);
