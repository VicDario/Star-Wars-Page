import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>

			</Switch>
		</BrowserRouter>
	);
}

export default App;
