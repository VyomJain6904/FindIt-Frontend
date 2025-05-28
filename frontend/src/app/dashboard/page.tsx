import { MovingGlobe } from "@/components/movingGlobe";
import { GridBackground } from "@/components/ui/gridBackground";
import { Tooltip } from "@/components/toolTip";
import { SearchButtonDashboard } from "@/components/findit/searchButtonDashboard";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			<div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4">
				<MovingGlobe />
				<SearchButtonDashboard />
				<GridBackground />
				<Tooltip />
			</div>
		</div>
	);
}
