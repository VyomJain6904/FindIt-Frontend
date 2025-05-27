"use client";

import AnimatedPlaceholderText from "@/components/AnimatedPlaceholderText";
import { cn } from "@/lib/utils";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	useAnimatedPlaceholder?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, useAnimatedPlaceholder, ...props }, ref) => {
		const [inputValue, setInputValue] = React.useState("");
		const radius = 100;
		const [visible, setVisible] = React.useState(false);
		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);

		function handleMouseMove({ currentTarget, clientX, clientY }: any) {
			const { left, top } = currentTarget.getBoundingClientRect();
			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}

		return (
			<motion.div
				style={{
					background: useMotionTemplate`
						radial-gradient(
							${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
							#3b82f6,
							transparent 80%
						)
					`,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className="group/input relative rounded-xl p-[2px] transition duration-300"
			>
				{/* Show animated placeholder only if input is empty */}
				{useAnimatedPlaceholder && !inputValue && (
					<span className="pointer-events-none absolute left-3 top-1 text-lg text-neutral-400 dark:text-neutral-600">
						<AnimatedPlaceholderText />
					</span>
				)}

				<input
					type={type}
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
						props.onChange?.(e);
					}}
					className={cn(
						`shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-xl border-none bg-gray-50 px-3 py-2 text-lg text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-lg file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
						className,
					)}
					ref={ref}
					placeholder="" // keep empty
					{...props}
				/>
			</motion.div>
		);
	},
);
