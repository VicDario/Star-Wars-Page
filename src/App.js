import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./stores/AppContext";
import Navbar from './components/Navbar';
import Home from './views/Home';
import CharactersPage from './views/CharactersPage';
import SpeciesPage from './views/SpeciesPage';
import PlanetsPage from './views/PlanetsPage';
import FilmsPage from './views/FilmsPage';
import StarshipsPage from './views/StarshipsPage';
import VehiclesPage from './views/VehiclesPage';
import CharacterDetails from './views/CharacterDetails';
import SpecieDetails from './views/SpecieDetails';
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
				<Route exact path="/films" component={FilmsPage} />
				<Route exact path="/people/:name/:id" component={CharacterDetails} />
				<Route exact path="/species/:name/:id" component={SpecieDetails} />
                <Route component={Error404} />
			</Switch>
		</BrowserRouter>
	);
}

export default injectContext(App);
