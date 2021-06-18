import { useContext } from 'react';
import { Context } from '../stores/AppContext';
import Carousel from '../components/Carousel'
import './Home.css';

function Home (props) {
    
    const {store, actions} = useContext(Context);
    const { people, species, planets, starships, vehicles, films } = store;

    return (
        <main className="container">
            <Carousel section={people} title="Characters" />
            <Carousel section={species} title="Species" />
            <Carousel section={planets} title="Planets" />
            <Carousel section={starships} title="Starships" />
            <Carousel section={vehicles} title="Vehicles" />
            {/* 
            <Carousel section={films} title="Films" /> */}
        </main>
    );
}

export default Home;