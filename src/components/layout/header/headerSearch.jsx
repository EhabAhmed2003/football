import React from "react";
import { Search } from "lucide-react";

function HeaderSearch() {
	return (
		<div className="w-full relative lg:block hidden">
			<input
				className="w-full border border-border rounded-full pr-8 h-10"
				type="search"
			/>
			<Search className="absolute top-6/12 right-2 -translate-y-6/12 w-6 h-7" />
		</div>
	);
}

export default HeaderSearch;
