"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const items = [
	{
		id: "quick",
		label: "Quick Scan",
	},
	{
		id: "full",
		label: "Full Scan",
	},
	{
		id: "port_scan",
		label: "Port Scan",
	},
	{
		id: "custom_wordlist",
		label: "Custom Wordlist",
	},
	{
		id: "dir_bruteforce",
		label: "Directory Bruteforce",
	},
	{
		id: "subdomain_enum",
		label: "Subdomain Enumeration",
	},
	{
		id: "tech_detect",
		label: "Technology Detection",
	},
] as const;

const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one item.",
	}),
});

export function CustomCheckboxList() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			items: ["quick"], // Default selected items
		},
	});

	// function onSubmit(data: z.infer<typeof FormSchema>) {
	// 	toast({
	// 		title: "You submitted the following values:",
	// 		description: (
	// 			<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
	// 				<code className="text-white">
	// 					{JSON.stringify(data, null, 2)}
	// 				</code>
	// 			</pre>
	// 		),
	// 	});
	// }

	return (
		<Form {...form}>
			<form
				// onSubmit={form.handleSubmit(onsubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="items"
					render={() => (
						<FormItem>
							{items.map((item) => (
								<FormField
									key={item.id}
									control={form.control}
									name="items"
									render={({ field }) => {
										return (
											<FormItem
												key={item.id}
												className="flex flex-row items-start space-x-3 space-y-0"
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(
															item.id,
														)}
														onCheckedChange={(
															checked,
														) => {
															return checked
																? field.onChange(
																		[
																			...field.value,
																			item.id,
																		],
																  )
																: field.onChange(
																		field.value?.filter(
																			(
																				value,
																			) =>
																				value !==
																				item.id,
																		),
																  );
														}}
													/>
												</FormControl>
												<FormLabel className="text-md font-normal">
													{item.label}
												</FormLabel>
											</FormItem>
										);
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
