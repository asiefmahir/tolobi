import Hero from "../sections/hero";
import { images } from "../assets";
import WhyUseTolobi from "../sections/why-use-tolibo";
import Features from "../sections/features";
import FAQ from "../sections/faq";
import Subscription from "../sections/subscription";
import MobileCard from "../sections/timeline-for-mobile";

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
			<MobileCard data={timelineData} />
			<WhyUseTolobi mobileView={mobileView} data={whyUseTolobi} />
			<FAQ mobileView={mobileView} data={faqData} />
			<Subscription mobileView={mobileView} />
		</>
	);
};

export default MobileView;
