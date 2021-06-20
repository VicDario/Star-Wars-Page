import { useContext, useState } from 'react';
import { Context } from '../stores/AppContext';
import Cards from '../components/Cards';
import LoadingSpiner from '../components/LoadingSpinner';
import Pagination from 'react-js-pagination';
import './Page.css';

function CharactersPage (props) {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const [page, setPage] = useState(1);

    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        actions.updatePeople(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-white title mt-4 mb-2">Characters</h1>
                {
                    !!people ?
                    <Cards elements={people} route="people"/>
                    :
                    <LoadingSpiner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center py-5">
                    {
                        !!people &&
                        people.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={people.total_records}
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

export default CharactersPage;