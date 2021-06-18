import { useContext } from 'react';
import { Context } from '../stores/AppContext';
import Cards from '../components/Cards';
import LoadingSpiner from '../components/LoadingSpinner';
import './List.css';

function PlanetsPage (props) {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-white title my-5">Characters</h1>
                {
                    !!planets ?
                    <Cards elements ={planets} />
                    :
                    <LoadingSpiner />
                }
            </div>
        </div>
    );
}

export default PlanetsPage;