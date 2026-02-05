import GeneralSettings from "./generalSettings";
import LanguageSelector from "./languageSelector";

function SettingsPanel({ activeView, setActiveView, closeAll }) {
	if (activeView === "language") {
		return (
			<LanguageSelector closeAll={closeAll} setActiveView={setActiveView} />
		);
	}
	return <GeneralSettings onLanguage={() => setActiveView("language")} />;
}

export default SettingsPanel;
