import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./stores/AppContext";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './views/Home';
import CharactersPage from './views/CharactersPage';
import SpeciesPage from './views/SpeciesPage';
import PlanetsPage from './views/PlanetsPage';
import StarshipsPage from './views/StarshipsPage';
import VehiclesPage from './views/VehiclesPage';
import CharacterDetails from './views/CharacterDetails';
import SpecieDetails from './views/SpecieDetails';
import PlanetDetails from './views/PlanetDetails';
import StarshipDetails from './views/StartshipDetails';
import VehicleDetails from './views/VehicleDetails';
import Error404 from './views/Error404';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/people" component={CharactersPage} />
				<Route exact path="/species" component={SpeciesPage} />
				<Route exact path="/planets" component={PlanetsPage} />
				<Route exact path="/vehicles" component={VehiclesPage} />
				<Route exact path="/starships" component={StarshipsPage} />
				<Route exact path="/people/:name/:id" component={CharacterDetails} />
				<Route exact path="/species/:name/:id" component={SpecieDetails} />
				<Route exact path="/planets/:name/:id" component={PlanetDetails} />
				<Route exact path="/starships/:name/:id" component={StarshipDetails} />
				<Route exact path="/vehicles/:name/:id" component={VehicleDetails} />

                <Route component={Error404} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default injectContext(App);
