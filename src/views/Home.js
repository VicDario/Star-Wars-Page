import { useContext } from "react";
import { Context } from '../stores/AppContext';
import './Home.css';

function Home (props) {
    
    const {store, actions} = useContext(Context);
    const { people } = store;

    return (
        <main className="container">
            <div className="row">
                    <h2 className="text-white">Characters</h2>
                {
                    !!people ?
                    (
                        people.results.map((character, key) => {
                        return (
                            <div className="col-md-4 my-4" key={key}>
                                <div className="card" >
                                    <img src="https://via.placeholder.com/200/300" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-text text-white">{character.name}</h4>
                                    </div>
                                </div>
                            </div>);
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
        </main>
    );
}

export default Home;