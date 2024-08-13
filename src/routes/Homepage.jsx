import Contact from "../components/pagesComponents/homepage/Contact";
import Libraries from "../components/pagesComponents/homepage/Libraries";
import OpacSearch from "../components/pagesComponents/homepage/OpacSearch";
import Video from "../components/pagesComponents/homepage/Video";
import Visitors from "../components/pagesComponents/homepage/Visitors";
import AnnualReport from "./annualReport/report";

function Homepage() {
	return (
		<>
			<OpacSearch />
			<AnnualReport/>
			<Video />
			<Visitors />
			<Libraries />
			<Contact />
		</>
	);
}

export default Homepage;
