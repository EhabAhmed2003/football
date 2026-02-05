import {
	Newspaper,
	Volleyball,
	ListOrdered,
	ArrowRightLeft,
	TvMinimalPlay,
} from "lucide-react";

export const desktopHeaderData = [
	{ id: 1, title: "الرئيسية", href: "/" },
	{ id: 2, title: "المباريات", href: "/" },
	{ id: 3, title: "الأخبار", href: "/" },
	{ id: 4, title: "الدوريات", href: "/" },
	{ id: 5, title: "الفرق", href: "/" },
];

export const mobileNavData = [
	{
		id: 1,
		icon: <Volleyball />,
		title: "المباريات",
		href: "/",
	},
	{
		id: 2,
		icon: <TvMinimalPlay />,
		title: "الفيديوهات",
		href: "/",
	},
	{
		id: 3,
		icon: <Newspaper />,
		title: "الأخبار",
		href: "/",
	},
	{
		id: 4,
		icon: <ListOrdered />,
		title: "الترتيب",
		href: "/",
	},
	{
		id: 5,
		icon: <ArrowRightLeft />,
		title: "الانتقالات",
		href: "/",
	},
];
