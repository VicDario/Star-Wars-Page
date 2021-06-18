import { useContext } from "react";
import { Context } from '../stores/AppContext';
import './Home.css';

function Home (props) {
    
    const {store, actions} = useContext(Context);
    const { people, species, planets } = store;

    return (
        <main className="container">
            <div className="row my-5">
                    <h2 className="text-white">Characters</h2>
                    <div className="col-md-12 carousel">
                {
                    !!people ?
                    (
                        people.results.map((character, key) => {
                        return (
                                <div className="card my-4" key={key} >
                                    <img src="https://via.placeholder.com/200/300" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-text text-white">{character.name}</h4>
                                    </div>
                                </div>
                            );
                        })
                    ):(
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    )
                }
                    </div>
            </div>
            <div className="row my-5">
                    <h2 className="text-white">Species</h2>
                    <div className="col-md-12 carousel">
                {
                    !!species ?
                    (
                        species.results.map((specie, key) => {
                        return (
                                <div className="card my-4" key={key} >
                                    <img src="https://via.placeholder.com/200/300" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-text text-white">{specie.name}</h4>
                                    </div>
                                </div>
                            );
                        })
                    ):(
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    )
                }
                    </div>
            </div>
            <div className="row my-5">
                    <h2 className="text-white">planets</h2>
                    <div className="col-md-12 carousel">
                {
                    !!planets ?
                    (
                        planets.results.map((planet, key) => {
                        return (
                                <div className="card my-4" key={key} >
                                    <img src="https://via.placeholder.com/200/300" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-text text-white">{planet.name}</h4>
                                    </div>
                                </div>
                            );
                        })
                    ):(
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    )
                }
                    </div>
            </div>
        </main>
    );
}

export default Home;