import Heading from '../heading/Heading';
import Intro from '../intro/Intro';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';
import Stories from '../stories/Stories';
import Booking from '../booking/Booking';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import PopUp from '../pop-up/Pop-up';

function App() {
  return (
    <div>
      <Navigation />
      <Heading id="1" />
      <Intro />
      <Services />
      <Pricing />
      <Stories />
      <Booking />
      <Footer />
      <PopUp />
    </div>
  );
}

export default App;
