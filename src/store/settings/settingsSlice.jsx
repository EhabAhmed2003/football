import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSettingsOpen: false,
};

const settingsSlice = createSlice({
	initialState,
	name: "settings",
	reducers: {
		showSettings: (state) => {
			state.isSettingsOpen = true;
		},
		closeSettings: (state) => {
			state.isSettingsOpen = false;
		},
		toggleSettings: (state) => {
			state.isSettingsOpen = !state.isSettingsOpen;
		},
	},
});

export default settingsSlice.reducer;
export const { showSettings, closeSettings, toggleSettings } =
	settingsSlice.actions;
