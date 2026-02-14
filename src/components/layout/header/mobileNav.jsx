import React from "react";
import { mobileNavData } from "./data/navLinksData";
import SettingsToggle from "./settings/settingsToggle";

function MobileNav() {
	return (
		<ul className="lg:hidden justify-between items-center fixed bottom-0 left-0 flex w-full px-5 sm:px-16 bg-card pb-5 pt-3 z-50">
			{mobileNavData?.map((element) => {
				return (
					<li
						key={element.id}
						className="flex flex-col justify-center items-center text-xs text-card-foreground font-bold hover:cursor-pointer active:text-primary-foreground transition duration-200"
					>
						<div>{element.icon}</div>
						<p>{element.title}</p>
					</li>
				);
			})}
			<li className="flex flex-col justify-center items-center text-xs text-card-foreground font-bold hover:cursor-pointer active:text-primary-foreground transition duration-200">
				<SettingsToggle />
			</li>
		</ul>
	);
}

export default MobileNav;
