import React from "react";
import { LanguagesData } from "../data/languagesData";
import { ChevronRight } from "lucide-react";

function LanguageSettings({ setActiveView, closeAll }) {
	return (
		<div className="absolute top-11 bg-card w-80 min-h-fit rounded-lg flex flex-col gap-3 text-foreground border border-border py-4 ">
			<div
				className="flex gap-1 items-center px-1 w-fit hover:cursor-pointer hover:text-primary-foreground transition"
				onClick={() => setActiveView("main")}
			>
				<ChevronRight className="w-5 h-4" />
				<h3 className="text-sm">اللغة</h3>
			</div>
			<ul className="flex flex-col px-4">
				{LanguagesData.map((lang) => {
					return (
						<li
							key={lang.id}
							onClick={closeAll}
							className="text-sm hover:cursor-pointer px-2 py-4 rounded-lg bg-background border border-transparent hover:border-primary-foreground hover:bg-primary-foreground/5 mt-2"
						>
							{lang.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default LanguageSettings;
