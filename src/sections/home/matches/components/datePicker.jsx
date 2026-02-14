"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CalendarPicker() {
	const [isOpen, setIsOpen] = useState(false);
	const [tempSelected, setTempSelected] = useState(null);
	const router = useRouter();

	const handleFilter = () => {
		if (!tempSelected) return;
		const date = format(tempSelected, "yyyy-MM-dd");
		router.push(`/?date=${date}`);

		setIsOpen(false);
	};

	return (
		<div className="relative w-fit">
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className="cursor-pointer"
			>
				<Calendar size={25} />
			</button>

			{isOpen && (
				<div className="absolute top-full -right-8/12 rounded-xl border bg-card p-4 w-fit">
					<DayPicker
						mode="single"
						selected={tempSelected}
						onSelect={setTempSelected}
						locale={enGB}
						className="text-foreground  z-50"
					/>

					{tempSelected && (
						<p className="text-center mt-3 text-sm opacity-70">
							📅 {format(tempSelected, "EEEE، dd MMMM yyyy")}
						</p>
					)}

					<div className="flex justify-center mt-3">
						<button
							onClick={handleFilter}
							disabled={!tempSelected}
							className="py-2 px-10 rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 hover:cursor-pointer"
						>
							Filter
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
