import React from "react";
import HeaderList from "./headerList";
import Image from "next/image";
import HeaderSearchInput from "./searchInput";
import SettingsButton from "./settings/settingsButton";
import HeaderDropdown from "./dropdown";

function Header() {
	return (
		<header>
			<div className="hidden justify-between items-center gap-4 w-full md:flex">
				<div className="w-1.5/12">
					<Image
						src="https://www.ysscores.com/images/logo.svg"
						alt="logo"
						width={150}
						height={50}
					/>
				</div>
				<div className="w-8/12 text-sm px-5">
					<HeaderList />
				</div>
				<div className="flex gap-3 items-center lg:w-3/12 w-1/12">
					<HeaderSearchInput />
					<SettingsButton />
				</div>
			</div>
			<div className="w-full">
				<HeaderDropdown />
			</div>
		</header>
	);
}

export default Header;
