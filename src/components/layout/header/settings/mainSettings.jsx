import React from "react";
import ThemeButton from "../../../themeButton/themeButton";
import { ChevronLeft } from "lucide-react";

function MainSettings({ onLanguage }) {
	return (
		<div className="absolute top-11 bg-card w-80 min-h-fit rounded-lg flex flex-col gap-3 text-foreground border border-border py-4 px-5">
			<div className="px-2 py-3">
				<div className="text-xs text-card-foreground dark:text-card-foreground ">
					المظهر
				</div>
				<div className="flex justify-between items-center">
					<h6 className="text-sm">الوضع الليلى</h6>
					<ThemeButton />
				</div>
			</div>
			<div className="w-full h-0.5 bg-border "></div>
			<div className="px-2 py-3">
				<div className="text-xs text-card-foreground dark:text-card-foreground">
					اللغة
				</div>
				<div className="text-sm flex justify-between">
					<h6>اللغة</h6>
					<div
						className="flex gap-2 hover:cursor-pointer hover:text-primary-foreground"
						onClick={onLanguage}
					>
						<p>العربية</p>
						<ChevronLeft className="w-5 h-5" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainSettings;
