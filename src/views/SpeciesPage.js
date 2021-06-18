import { useContext } from 'react';
import { Context } from '../stores/AppContext';
import Cards from '../components/Cards';
import LoadingSpiner from '../components/LoadingSpinner';
import './List.css';

function SpeciesPage (props) {
    const { store, actions } = useContext(Context);
    const { species } = store;
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-white title my-5">Characters</h1>
                {
                    !!species ?
                    <Cards elements ={species} />
                    :
                    <LoadingSpiner />
                }
            </div>
        </div>
    );
}

export default SpeciesPage;