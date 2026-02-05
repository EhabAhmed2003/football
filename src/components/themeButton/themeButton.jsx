"use client";
import React from "react";
import { useTheme } from "@/providers/themeProvider";

function ThemeButton() {
	const { theme, toggleTheme } = useTheme();

	return (
		<label className="relative inline-block w-13 h-6 font-medium hover:cursor-pointer">
			<input
				type="checkbox"
				className="opacity-0 w-0 h-0 peer"
				checked={theme === "light"}
				onChange={toggleTheme}
			/>

			{/* Slider background */}
			<span className="absolute top-0 left-0 right-1 bottom-0 bg-blue-300 rounded-full transition-colors duration-400 peer-checked:bg-blue-900"></span>

			{/* Slider circle */}
			<span className="absolute top-0.5 left-0 bottom-0 w-5 h-5 bg-gray-200 rounded-full z-10 transition-transform duration-400 peer-checked:translate-x-7"></span>

			{/* Sun icon */}
			<span className="absolute top-0.5 left-7 w-5 h-5 z-0 animate-[rotate_15s_linear_infinite]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#ffd43b"
				>
					<circle cx="12" cy="12" r="5" />
					<path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zm-12.02 12.02a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zm6.36-14.36a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm-5.66-14.66a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z" />
				</svg>
			</span>

			{/* Moon icon */}
			<span className="absolute top-0.5 left-1 w-4 h-4 z-0 fill-blue-300 animate-[tilt_5s_linear_infinite]">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
					<path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
				</svg>
			</span>
		</label>
	);
}

export default ThemeButton;
