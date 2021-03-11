import '../App.css';
import Hero from '../sections/hero'

import { images, icons } from '../assets'
import Features from '../sections/features';
import PricingTable from '../sections/pricing-table';
import Timeline from '../sections/timeline';
import CompetitorTable from '../sections/competitor-table';

const features = [
  {
    type: 'time',
    icon: icons.documentTime,
    excerpt: 'Save valuable time from the rental process'
  },
  {
    type: 'time',
    icon: icons.documentTime,
    excerpt: 'Save valuable time from the rental process'
  },
  {
    type: 'time',
    icon: icons.documentTime,
    excerpt: 'Save valuable time from the rental process'
  }
]
const datas = [
  {
    title: `Access to Tolobi's Dashboard`,
    checkers: ['tick', 'cross', 'tick']
  },
  {
    title: `Access to Tolobi's Dashboard`,
    checkers: ['tick', 'tick', 'tick']
  },
  {
    title: `Access to Tolobi's Dashboard`,
    checkers: ['tick', 'cross', 'tick']
  }
]

const info = {
  title: 'TENANT PLACEMENT FEE',
  subTitle: 'Tax Deductible',
  data: [
    {
      percentage: '75',
      excerpt: `Of First Month’s Rent`
    },
    {
      percentage: '75',
      excerpt: `Of First Month’s Rent`
    }, {
      percentage: '75',
      excerpt: `Of First Month’s Rent`
    },
  ]
}

const tableDataOfCompetitor = [
  {
    title: 'Features',
    competitor: 'Competitors',
    tolobi: images.logo
  },
  {
    title: 'Tenant Placement Fee',
    competitor: {
      percentage: '100%',
      condition: 'Of First Month’s Rent'
    },
    tolobi: {
      percentage: '40%',
      condition: 'Of First Month’s Rent'
    }
  },
  {
    title: 'Mark Up On Repairs',
    competitor: '100%',
    tolobi: '0%'
  }
]

function App() {
  return (
    <div className="App">
      <Hero image={images.bgImage} />
      <Features features={features} />
      <PricingTable datas={datas} info={info} />
      <CompetitorTable data={tableDataOfCompetitor} />
      {/* <Timeline /> */}
    </div>
  );
}

export default App;
