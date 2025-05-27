import { LoginButton } from "@/components/loginButton";
import { MovingGlobe } from "@/components/movingGlobe";
import { SearchDomainBox } from "@/components/searchBox";
import { GridBackground } from "@/components/ui/gridBackground";
import { Tooltip } from "@/components/toolTip";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			<LoginButton />
			<div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4">
				<MovingGlobe />
				<SearchDomainBox />
				<GridBackground />
				<Tooltip />
			</div>
		</div>
	);
}
