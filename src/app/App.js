import Hero from '../sections/hero'

import { images } from '../assets'
import Features from '../sections/features';
import PricingTable from '../sections/pricing-table';
import Timeline from '../sections/timeline';
import CompetitorTable from '../sections/competitor-table';
import WhyUseTolobi from '../sections/why-use-tolibo';
import FAQ from '../sections/faq';
import Subscription from '../sections/subscription';
import {
  features,
  datas,
  info,
  tableDataOfCompetitor,
  whyUseTolobi,
  timelineData,
  faqData
} from '../data'



function App() {
  return (
    <div className="App">
      <Hero image={images.bgImage} />
      <Features features={features} />
      <PricingTable datas={datas} info={info} />
      <Timeline data={timelineData} />
      <CompetitorTable data={tableDataOfCompetitor} />
      <WhyUseTolobi data={whyUseTolobi} />
      <FAQ data={faqData} />
      <Subscription />
    </div>
  );
}

export default App;
