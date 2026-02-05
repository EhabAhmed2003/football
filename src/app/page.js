"use client";
import useWidth from "@/hooks/useWidth";
import { useEffect } from "react";

export default function Home() {
	const width = useWidth();
	useEffect(() => {
		console.log(width);
	}, [width]);

	return (
		<main className="flex max-w-full items-center justify-center bg-background text-foreground font-sans dark:bg-background">
			<div></div>
		</main>
	);
}
