import { useContext, useState } from 'react';
import { Context } from '../stores/AppContext';
import Cards from '../components/Cards';
import LoadingSpiner from '../components/LoadingSpinner';
import Pagination from 'react-js-pagination';
import './Page.css';

function VehiclesPage (props) {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;
    const [page, setPage] = useState(1);

    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        actions.updateVehicles(`https://www.swapi.tech/api/vehicles/?page=${pageNumber}&limit=9`);
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-white title mt-4 mb-2">Vehicles</h1>
                {
                    !!vehicles ?
                    <Cards elements ={vehicles} route="vehicles" />
                    :
                    <LoadingSpiner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center py-5">
                    {
                        !!vehicles &&
                        vehicles.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={vehicles.total_records}
                                onChange={handleChangePage}
                                itemClass="page-item"
                                linkClass="page-link"
                                variant="outlined"
                                shape="rounded"
                            />
                        ) : (" ")
                    }
                </div>
            </div>
        </div>
    );
}

export default VehiclesPage;