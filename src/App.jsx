import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './stores/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home/Home';
import CharactersPage from './views/CharactersPage/CharactersPage';
import SpeciesPage from './views/SpeciesPage/SpeciesPage';
import PlanetsPage from './views/PlanetsPage/PlanetsPage';
import StarshipsPage from './views/StarshipsPage/StarshipsPage';
import VehiclesPage from './views/VehiclesPage/VehiclesPage';
import CharacterDetails from './views/CharacterDetails/CharacterDetails';
import SpecieDetails from './views/SpecieDetails/SpecieDetails';
import PlanetDetails from './views/PlanetDetails/PlanetDetails';
import StarshipDetails from './views/StarshipDetails/StarshipDetails';
import VehicleDetails from './views/VehiclesDetails/VehicleDetails';
import Error404 from './views/Error404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/characters/:name/:id" element={<CharacterDetails />} />
        <Route path="/species/:name/:id" element={<SpecieDetails />} />
        <Route path="/planets/:name/:id" element={<PlanetDetails />} />
        <Route path="/starships/:name/:id" element={<StarshipDetails />} />
        <Route path="/vehicles/:name/:id" element={<VehicleDetails />} />

        <Route element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
