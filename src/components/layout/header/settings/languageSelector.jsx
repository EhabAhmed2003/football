import React from "react";
import { languagesOptions } from "../data/languagesOptions";
import { ChevronRight } from "lucide-react";

function LanguageSelector({ setActiveView, closeAll }) {
	return (
		<div className="fixed top-0 right-0 z-50 rounded-b-lg lg:rounded-lg lg:absolute lg:top-11 lg:right-0 2xl:-translate-x-3/6 2xl:left-6/12 bg-card w-full lg:w-80 min-h-fit  flex flex-col gap-3 text-foreground border border-border py-4 ">
			<div
				className="flex gap-1 items-center px-1 w-fit hover:cursor-pointer hover:text-primary-foreground transition"
				onClick={() => setActiveView("main")}
			>
				<ChevronRight className="w-5 h-4" />
				<h3 className="text-sm">اللغة</h3>
			</div>
			<ul className="flex flex-col px-4">
				{languagesOptions.map((lang) => {
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

export default LanguageSelector;
