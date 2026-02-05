"use client";
import React, { useState } from "react";
import { Settings } from "lucide-react";
import SettingsDropdown from "./settingsDropdown";

function SettingsButton() {
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
		<div className="relative w-14 h-10 rounded-2xl flex justify-center items-center hover:transition-all bg-primary">
			<div
				className="w-full h-full flex justify-center items-center rounded-2xl hover:cursor-pointer group hover:bg-foreground"
				onClick={setToggle}
			>
				<Settings className="group-hover:text-background transition" />
			</div>
			{isOpen && (
				<SettingsDropdown
					activeView={activeView}
					setActiveView={setActiveView}
					closeAll={closeAll}
				/>
			)}
		</div>
	);
}

export default SettingsButton;
