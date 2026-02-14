import React from "react";
import NavLinks from "./navLinks";
import Image from "next/image";
import HeaderSearch from "./headerSearch";
import SettingsButton from "./settings/settingsToggle";

function DesktopHeader() {
	return (
		<>
			<div className="w-1.5/12">
				<Image
					src="https://www.ysscores.com/images/logo.svg"
					alt="logo"
					width={150}
					height={50}
				/>
			</div>
			<div className="w-8/12 text-sm xl:px-20 px-10">
				<NavLinks />
			</div>
			<div className="flex gap-3 items-center lg:w-3/12 w-1/12">
				<HeaderSearch />
				<SettingsButton />
			</div>
		</>
	);
}

export default DesktopHeader;
