import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import CarousselComponent from './components/CarousselComponent';
import EtapeComponent from './components/EtapeComponent';
import SloganComponent from './components/SloganComponent';
import MapComponent from './components/MapComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavbarComponent />
      
      {/* Main content with margin-top for fixed navbar */}
      <main className="mt-5 pt-5">
        {/* Nos Solutions - Caroussel */}
        <section id="solutions" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nos Solutions</h2>
          <CarousselComponent />
        </section>

        {/* Étapes */}
        <section id="etapes" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Étapes</h2>
          <div className="space-y-16">
            <EtapeComponent position="right" />
            <EtapeComponent position="left" />
            <EtapeComponent position="right" />
          </div>
        </section>

        {/* Slogan */}
        <section id="slogan" className="py-16">
          <SloganComponent />
        </section>

        {/* Map */}
        <section id="map" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Notre présence</h2>
          <MapComponent />
        </section>

        {/* Footer */}
        <FooterComponent />
      </main>
    </div>
  )
}

export default App
