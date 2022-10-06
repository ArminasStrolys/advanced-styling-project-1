import Heading from '../heading/Heading';
import Intro from '../intro/Intro';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';
import Stories from '../stories/Stories';
import Booking from '../booking/Booking';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Heading />
      <Intro />
      <Services />
      <Pricing />
      <Stories />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
