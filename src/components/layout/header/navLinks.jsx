import React from "react";
import { desktopHeaderData } from "./data/navLinksData";
import Link from "next/link";
import { Ellipsis } from "lucide-react";

const NavLinks = () => {
	return (
		<nav className="flex justify-between">
			{desktopHeaderData.map((navItem) => {
				return (
					<Link
						key={navItem.id}
						href={navItem.href}
						className="font-bold text-card-foreground hover:text-primary-foreground"
					>
						{navItem.title}
					</Link>
				);
			})}
			<Ellipsis className="hover:cursor-pointer" />
		</nav>
	);
};
export default NavLinks;
