import {
	Newspaper,
	Volleyball,
	ArrowRightLeft,
	TvMinimalPlay,
	Globe,
} from "lucide-react";

export const desktopHeaderData = [
	{ id: 1, title: "Home", href: "/" },
	{ id: 2, title: "Matches", href: "/" },
	{ id: 3, title: "News", href: "/" },
	{ id: 4, title: "Leagues", href: "/" },
	{ id: 5, title: "Videos", href: "/" },
	{ id: 6, title: "Transfer", href: "/" },
];

export const mobileNavData = [
	{
		id: 1,
		icon: <Volleyball />,
		title: "Matches",
		href: "/",
	},
	{
		id: 2,
		icon: <TvMinimalPlay />,
		title: "Videos",
		href: "/",
	},
	{
		id: 3,
		icon: <Newspaper />,
		title: "News",
		href: "/",
	},
	{
		id: 4,
		icon: <Globe />,
		title: "Leagues",
		href: "/",
	},
	{
		id: 5,
		icon: <ArrowRightLeft />,
		title: "Transfer",
		href: "/",
	},
];
