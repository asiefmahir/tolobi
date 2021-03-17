import Hero from "../sections/hero";
import { images } from "../assets";
import WhyUseTolobi from "../sections/why-use-tolibo";
import Features from "../sections/features";
import FAQ from "../sections/faq";
import Subscription from "../sections/subscription";
import MobileCard from "../sections/timeline-for-mobile";
import CompetitorTableForMobileVersion from "../MobileSections/competitor-table";
import Pricingtable from "../MobileSections/pricing-table";
import {
	features,
	datas,
	info,
	tableDataOfCompetitor,
	whyUseTolobi,
	timelineData,
	faqData,
} from "../data";

const MobileView = ({ mobileView }) => {
	return (
		<>
			<Hero mobileView={mobileView} image={images.bgImage} />
			<Features mobileView={mobileView} features={features} />
			<Pricingtable data={datas} />
			<MobileCard mobileView={mobileView} data={timelineData} />
			<CompetitorTableForMobileVersion data={tableDataOfCompetitor} />
			<WhyUseTolobi mobileView={mobileView} data={whyUseTolobi} />
			<FAQ mobileView={mobileView} data={faqData} />
			<Subscription mobileView={mobileView} />
		</>
	);
};

export default MobileView;
