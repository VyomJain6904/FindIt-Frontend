"use client";

import React from "react";
import { motion } from "motion/react";

export default function ColourfulText({ text }: { text: string }) {
	const colors = [
		"rgb(255, 255, 255)", // white
		"rgb(200, 220, 255)", // very light blue
		"rgb(150, 200, 255)", // soft blue
		"rgb(100, 180, 255)", // light blue
		"rgb(70, 150, 255)", // mid blue
		"rgb(40, 120, 255)", // deeper blue
		"rgb(20, 90, 255)", // strong blue
		"rgb(10, 60, 255)", // vibrant blue
		"rgb(0, 40, 255)", // almost full blue
		"rgb(0, 0, 255)", // pure blue
	];

	const [currentColors, setCurrentColors] = React.useState(colors);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			const shuffled = [...colors].sort(() => Math.random() - 0.5);
			setCurrentColors(shuffled);
			setCount((prev) => prev + 1);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return text.split("").map((char, index) => (
		<motion.span
			key={`${char}-${count}-${index}`}
			initial={{
				y: 0,
			}}
			animate={{
				color: currentColors[index % currentColors.length],
				y: [0, -3, 0],
				scale: [1, 1.01, 1],
				filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
				opacity: [1, 0.8, 1],
			}}
			transition={{
				duration: 0.5,
				delay: index * 0.05,
			}}
			className="inline-block whitespace-pre font-sans tracking-tight text-7xl"
		>
			{char}
		</motion.span>
	));
}
