import { useContext, useState } from 'react';
import { Context } from '../stores/AppContext';
import Cards from '../components/Cards';
import LoadingSpiner from '../components/LoadingSpinner';
import Pagination from 'react-js-pagination';
import './Page.css';

function PlanetsPage (props) {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    const [page, setPage] = useState(1);

    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        actions.updatePlanets(`https://www.swapi.tech/api/planets/?page=${pageNumber}&limit=9`);
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-white title mt-4 mb-2">Planets</h1>
                {
                    !!planets ?
                    <Cards elements ={planets} />
                    :
                    <LoadingSpiner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center py-5">
                    {
                        !!planets &&
                        planets.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={planets.total_records}
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

export default PlanetsPage;