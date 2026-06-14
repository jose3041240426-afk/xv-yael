import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Parents from './components/Parents';
import EventDetails from './components/EventDetails';
import Itinerario from './components/Itinerario';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import GoldParticles from './components/GoldParticles';
// import Maintenance from './components/Maintenance'; // ← descomentar si se activa

// ── Cambiar a true para mostrar la pantalla "En preparación" ──
const MAINTENANCE = false;

function App() {
  // if (MAINTENANCE) return <Maintenance />;
  if (MAINTENANCE) {
    const M = require('./components/Maintenance').default;
    return <M />;
  }

  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Global Background Particle Effect */}
      <GoldParticles />
      
      {/* Scrollable Layout sections */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <Countdown />
        <Parents />
        <EventDetails />
        <Itinerario />
        <DressCode />
        <Gifts />
        <Gallery />
        <RSVP />
      </div>
    </div>
  );
}

export default App;


