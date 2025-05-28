"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/findit/moving-border";

export function SearchButtonDashboard() {
	return (
		<div className="h-full w-full flex items-center justify-center">
			<Link href="/dashboard/search">
				<Button
					onClick={() => console.log("Search button clicked")}
					borderRadius="10rem"
					className="bg-black text-white text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-2 hover:bg-gray-800 transition-colors duration-200"
				>
					Search Domain
				</Button>
			</Link>
		</div>
	);
}
