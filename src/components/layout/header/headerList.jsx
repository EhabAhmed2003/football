import React from "react";
import { headerData } from "./data/headerData";
import Link from "next/link";
import { Ellipsis } from "lucide-react";

const HeaderList = () => {
	return (
		<nav className="flex justify-between">
			{headerData.map((navItem) => {
				return (
					<Link key={navItem.id} href={navItem.href} className="font-bold text-card-foreground hover:text-primary-foreground">
						{navItem.title}
					</Link>
				);
			})}
			<Ellipsis className="hover:cursor-pointer"/>
		</nav>
	);
};
export default HeaderList;
