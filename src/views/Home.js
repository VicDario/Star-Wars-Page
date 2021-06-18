import { useContext } from 'react';
import { Context } from '../stores/AppContext';
import Carousel from '../components/Carousel'
import './Home.css';

function Home (props) {
    
    const {store, actions} = useContext(Context);
    const { people, species, planets } = store;

    return (
        <main className="container">
            <Carousel section={people} title="Characters" />
            <Carousel section={species} title="Species" />
            <Carousel section={planets} title="Planets" />
        </main>
    );
}

export default Home;