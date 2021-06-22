import { useParams, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../stores/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./CharacterDetails.css";
import LoadingSpiner from "../components/LoadingSpinner";

function SpecieDetails(props) {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { specie, favorites } = store;

    useEffect(() => {
        actions.getSpecie(`https://www.swapi.tech/api/species/${params.id}`);
    }, []);

    return (
        <div className="container">
            {!!specie && 
                specie.data.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                <div className="row my-5 mx-2 card-details p-0">
                    <div className="col-md-6 col-sm-12 p-0">
                                <img
                                    className="img-details"
                                    src="https://via.placeholder.com/500/500"
                                    alt={specie.data.result.properties.name}
                                />
                    </div>
                    <div className="col-md-6 col-sm-12 details pt-4">
                            <h1 className="text-white">{specie.data.result.properties.name}</h1>
                            <ul className="list-details text-white text-capitalize ">
                                <li className="d-flex justify-content-between">
                                    <span>Classification:</span><span>{specie.data.result.properties.classification}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Designation:</span><span>{specie.data.result.properties.designation}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Average height:</span><span>{specie.data.result.properties.average_height}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                   <span>Average lifespan:</span><span>{specie.data.result.properties.average_lifespan}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Hair colors:</span><span>{specie.data.result.properties.hair_colors}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Eye colors:</span><span>{specie.data.result.properties.eye_colors}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Language:</span><span>{specie.data.result.properties.language}</span>
                                </li>
                               <li className="d-flex justify-content-between">
                                    <span>Home planet:</span> {!!specie.planet ? 
                                        <Link className="text-info" to={`/planets/${specie.planet.result.properties.name.split(" ").join("").toLowerCase()}/${specie.planet.result.uid}`} >
                                        {specie.planet.result.properties.name}
                                        </Link> :
                                        <div class="spinner-border text-light" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>}
                                </li>
                            </ul>
                            <div className="buttons d-flex justify-content-between">
                                <Link to="/species" className="btn-link">
                                    <button type="button" className="btn btn-light mb-4">Back to Species</button>
                                </Link>
                                {   (favorites.indexOf(specie.data.result.properties.name) === -1) ?
                                    (
                                    <button type="button" className="btn-like btn btn-light mb-4" 
                                    onClick={() => actions.addFavorite(specie.data.result.properties.name)} >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    ) : (
                                    <button type="button" className="btn-like-active btn btn-light mb-4" 
                                    onClick={() => actions.deleteFavorite(specie.data.result.properties.name)} >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    )

                                }
                                
                            </div>
                    </div>
                </div>
            ) : (
                <div className="my-5">
                    <LoadingSpiner />
                </div>
            )
            }
        </div>
    );
}

export default SpecieDetails;
