import '../App.css';
import Hero from '../components/hero'

import { images, icons } from '../assets'
import Features from '../components/features';

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

function App() {
  return (
    <div className="App">
      <Hero image={images.bgImage} />
      <Features features={features} />
    </div>
  );
}

export default App;
