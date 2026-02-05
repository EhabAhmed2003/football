"use client";

import { useState } from "react";
import MainSettings from "./mainSettings";
import LanguageSettings from "./languageSettings";

function SettingsDropdown({ activeView, setActiveView, closeAll }) {
	if (activeView === "language") {
		return (
			<LanguageSettings closeAll={closeAll} setActiveView={setActiveView} />
		);
	}
	return <MainSettings onLanguage={() => setActiveView("language")} />;
}

export default SettingsDropdown;
