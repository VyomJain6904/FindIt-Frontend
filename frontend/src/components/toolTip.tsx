"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const people = [
	{
		id: 1,
		name: "Vyom Jain",
		designation: "Cybersecurity Engineer",
		image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
	},
];

export function Tooltip() {
	return (
		<div className="relative h-[40rem] overflow-hidden flex items-center justify-center w-full">
			<WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
				<h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
					Meet Our Developers
				</h2>
				<div className="flex flex-row items-center justify-center mb-10 w-full">
					<AnimatedTooltip items={people} />
				</div>
			</WavyBackground>
		</div>
	);
}
