import { useState } from 'react'
import Desktop from '../view-on-condition/Desktop'
import MobileView from '../view-on-condition/Mobile'

const App = () => {
  const [mobileView, setMobileView] = useState(true)
  return (
    <div className="App">
      {/* <Desktop /> */}
      <MobileView mobileView={mobileView} />
    </div>
  );
}

export default App;
