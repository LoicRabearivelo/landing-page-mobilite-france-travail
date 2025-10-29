import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import CarousselComponent from './components/CarousselComponent';
import EtapeComponent from './components/EtapeComponent';
import SloganComponent from './components/SloganComponent';
import MapComponent from './components/MapComponent';
import FooterComponent from './components/FooterComponent';

// Import des images
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

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
          <div>
            <EtapeComponent 
              title="Les points relais France Travail : un service au plus près de vous"
              description="France Travail se rapproche de vous grâce aux points relais ! Ces espaces de proximité, installés dans des lieux déjà existants (mairies annexes, maisons de quartier, associations, etc.), permettent de rencontrer facilement un conseiller sans avoir à se déplacer loin."
              imageSrc={image1}
            />
            <EtapeComponent 
              title="Comment ça marche ?"
              description={`• Prenez rendez-vous directement depuis l'application France Travail.

• Le conseiller se déplace dans le point relais de votre secteur, selon un planning défini.

• Vous bénéficiez d'un accompagnement personnalisé, dans un lieu familier et proche de chez vous.`}
              imageSrc={image2}
            />
            <EtapeComponent 
              title="Pourquoi ce dispositif ?"
              description="Le but est d'utiliser les structures déjà présentes sur le territoire afin de limiter les coûts et de proposer un service accessible à tous, même dans les zones les plus éloignées."
              imageSrc={image3}
            />
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
