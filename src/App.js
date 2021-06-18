import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./stores/AppContext";
import Navbar from './components/Navbar';
import Home from './views/Home';
import CharactersPage from './views/CharactersPage';
import SpeciesPage from './views/SpeciesPage';
import PlanetsPage from './views/PlanetsPage';
import Error404 from './views/Error404'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/characters" component={CharactersPage} />
				<Route exact path="/species" component={SpeciesPage} />
				<Route exact path="/planets" component={PlanetsPage} />
                <Route component={Error404} />
			</Switch>
		</BrowserRouter>
	);
}

export default injectContext(App);
