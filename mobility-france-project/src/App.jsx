import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarousselComponent';
import EtapeComponent from './components/EtapeComponent';
import SloganComponent from './components/SloganComponent';
import MapComponent from './components/MapComponent';
import FooterComponent from './components/FooterComponent';
import SearchComponent from './components/SearchComponent';

// Import des images
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <main className="mt-5 pt-5 flex-grow-1">
        <section id="solutions" className="p-0">
          <CarouselComponent />
        </section>

        <section id="etapes" className="py-5 bg-light">
          <div>
            <EtapeComponent 
              position="left"
              title="Les points relais France Travail : un service au plus près de vous"
              description="France Travail se rapproche de vous grâce aux points relais ! Ces espaces de proximité, installés dans des lieux déjà existants (mairies annexes, maisons de quartier, associations, etc.), permettent de rencontrer facilement un conseiller sans avoir à se déplacer loin."
              imageSrc={image1}
            />
            <EtapeComponent 
              position="right"
              title="Comment ça marche ?"
              description={`• Prenez rendez-vous directement depuis l'application France Travail.\n
• Le conseiller se déplace dans le point relais de votre secteur, selon un planning défini.\n
• Vous bénéficiez d'un accompagnement personnalisé, dans un lieu familier et proche de chez vous.`}
              imageSrc={image2}
            />
            <EtapeComponent 
              position="left"
              title="Pourquoi ce dispositif ?"
              description="Le but est d'utiliser les structures déjà présentes sur le territoire afin de limiter les coûts et de proposer un service accessible à tous, même dans les zones les plus éloignées."
              imageSrc={image3}
            />
          </div>
        </section>

        {/* 💬 Slogan */}
        <section id="slogan" className="py-5">
          <SloganComponent />
        </section>

        {/* <section id="search" className="py-5 bg-light"> */}
          {/* <h2 className="text-center mb-4 fw-bold">Trouvez la mairie la plus proche</h2> */}
          {/* <SearchComponent /> */}
        {/* </section> */}

        <section id="map" className="py-5">
          <h2 className="text-center mb-4 fw-bold">Notre présence</h2>
          <MapComponent />
        </section>
      </main>

      {/* ✅ Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
