import { useContext } from 'react';
import { Context } from '../stores/AppContext';
import Carousel from '../components/Carousel';
import CarouselFilms from '../components/CarouselFilms';
import './Home.css';

function Home () {
    
    const {store} = useContext(Context);
    const { people, species, planets, starships, vehicles, films } = store;

    return (
        <main className="container">
            <Carousel section={people} title="Characters" route="people"/>
            <Carousel section={species} title="Species" route="species" />
            <Carousel section={planets} title="Planets" route="planets" />
            <Carousel section={starships} title="Starships" route="starships" />
            <Carousel section={vehicles} title="Vehicles" route="vehicles" />
            <CarouselFilms section={films} title="Films" route="films" />
        </main>
    );
}

export default Home;