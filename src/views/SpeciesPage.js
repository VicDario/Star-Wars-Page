import { useContext, useState } from 'react';
import { Context } from '../stores/AppContext';
import Cards from '../components/Cards';
import LoadingSpiner from '../components/LoadingSpinner';
import Pagination from 'react-js-pagination';
import './Page.css';

function SpeciesPage (props) {
    const { store, actions } = useContext(Context);
    const { species } = store;
    const [page, setPage] = useState(1);

    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        actions.updateSpecies(`https://www.swapi.tech/api/species/?page=${pageNumber}&limit=9`);
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-white title mt-4 mb-2">Species</h1>
                {
                    !!species ?
                    <Cards elements ={species} route="species" />
                    :
                    <LoadingSpiner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center py-5">
                    {
                        !!species &&
                        species.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={species.total_records}
                                onChange={handleChangePage}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        ) : (" ")
                    }
                </div>
            </div>
        </div>
    );
}

export default SpeciesPage;