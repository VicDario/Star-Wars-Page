import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./stores/AppContext";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Character from './views/Character'
import Error404 from './views/Error404'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/characters" component={Character} />
                <Route component={Error404} />
			</Switch>
		</BrowserRouter>
	);
}

export default injectContext(App);
