import CalendarPicker from "./datePicker";
import { format } from "date-fns";

function MatchesHeader({ date }) {
	const dayName = format(new Date(date), "EEEE");
	const safeDate =
		date && !isNaN(new Date(date))
			? date
			: new Date().toISOString().split("T")[0];
	return (
		<header className="flex justify-between w-full items-center px-4 sticky top-0 left-0 bg-background pb-3 z-50">
			<h2 className="font-bold text-lg text-primary-foreground">{dayName}</h2>

			<div className="mt-4 text-sm flex items-center gap-3">
				<p>{safeDate}</p>
				<CalendarPicker />
			</div>
		</header>
	);
}

export default MatchesHeader;
