"use client";
import React, { useState } from "react";
import { Settings } from "lucide-react";
import SettingsPanel from "./settingsPanel";

function SettingsToggle() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeView, setActiveView] = useState("main");

	const closeAll = () => {
		setIsOpen(false);
		setActiveView("main");
	};
	const setToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="relative w-14 h-10 rounded-2xl flex justify-center items-center hover:transition-all md:bg-primary">
			<div
				className="w-full h-full flex-col flex justify-center items-center rounded-2xl hover:cursor-pointer group md:hover:bg-foreground"
				onClick={setToggle}
			>
				<Settings className="md:group-hover:text-background transition" />
				<p className="md:hidden block">الاعدادات</p>
			</div>
			{isOpen && (
				<SettingsPanel
					activeView={activeView}
					setActiveView={setActiveView}
					closeAll={closeAll}
				/>
			)}
		</div>
	);
}

export default SettingsToggle;
