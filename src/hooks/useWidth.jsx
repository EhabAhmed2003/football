"use client";
import React, { useEffect, useState } from "react";

function useWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		addEventListener(`resize`, handleResize);
		return () => removeEventListener("resize", handleResize);
	}, [width]);
	return width;
}

export default useWidth;
