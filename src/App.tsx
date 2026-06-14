import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Countdown from './components/Countdown';
import Parents from './components/Parents';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Hero />
      <Welcome />
      <Countdown />
      <Parents />
      <EventDetails />
      <DressCode />
      <Gifts />
      <Gallery />
      <RSVP />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
