import { useContext } from 'react';
import { Context } from '../stores/AppContext';
import Cards from '../components/Cards';
import LoadingSpiner from '../components/LoadingSpinner';
import './List.css';

function CharactersPage (props) {
    const { store, actions } = useContext(Context);
    const { people } = store;
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-white title my-5">Characters</h1>
                {
                    !!people ?
                    <Cards elements ={people} />
                    :
                    <LoadingSpiner />
                }
            </div>
        </div>
    );
}

export default CharactersPage;