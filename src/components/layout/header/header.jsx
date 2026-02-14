import React from "react";
import MobileNav from "./mobileNav";
import DesktopHeader from "./desktopHeader";

function Header() {
	return (
		<header>
			<div className="hidden justify-between items-center gap-4 w-full lg:flex">
				<DesktopHeader />
			</div>
			<nav>
				<MobileNav />
			</nav>
		</header>
	);
}

export default Header;
