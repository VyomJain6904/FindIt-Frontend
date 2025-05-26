import { MovingGlobe } from "@/components/movingGlobe";
import { SearchDomainBox } from "@/components/searchBox";

export default function Home() {
	return (
		<div className="bg-black">
			<MovingGlobe />
			<SearchDomainBox />
		</div>
	);
}
