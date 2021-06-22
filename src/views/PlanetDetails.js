import { useParams, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../stores/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./CharacterDetails.css";
import LoadingSpiner from "../components/LoadingSpinner";

function PlanetDetails(props) {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { planet, favorites } = store;

    useEffect(() => {
        actions.getPlanet(`https://www.swapi.tech/api/planets/${params.id}`);
    }, []);

    return (
        <div className="container">
            {!!planet && 
                planet.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                <div className="row my-5 mx-2 card-details p-0">
                    <div className="col-md-6 col-sm-12 p-0">
                                <img
                                    className="img-details"
                                    src="https://via.placeholder.com/500/500"
                                    alt={planet.result.properties.name}
                                />
                    </div>
                    <div className="col-md-6 col-sm-12 details pt-4">
                            <h1 className="text-white">{planet.result.properties.name}</h1>
                            <ul className="list-details text-white text-capitalize ">
                                <li className="d-flex justify-content-between">
                                    <span>Diameter:</span><span>{planet.result.properties.diameter}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Rotation period:</span><span>{planet.result.properties.rotation_period}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Orbital period:</span><span>{planet.result.properties.orbital_period}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                   <span>Gravity:</span><span>{planet.result.properties.gravity}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Population:</span><span>{planet.result.properties.population}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Climate:</span><span>{planet.result.properties.climate}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Terrain:</span><span>{planet.result.properties.terrain}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Surface water:</span><span>{planet.result.properties.surface_water}</span>
                                </li>
                            </ul>
                            <div className="buttons d-flex justify-content-between">
                                <Link to="/planets" className="btn-link">
                                    <button type="button" className="btn btn-light mb-4">Back to planets</button>
                                </Link>
                                {   (favorites.indexOf(planet.result.properties.name) === -1) ?
                                    (
                                    <button type="button" className="btn-like btn btn-light mb-4" 
                                    onClick={() => actions.addFavorite(planet.result.properties.name)} >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    ) : (
                                    <button type="button" className="btn-like-active btn btn-light mb-4" 
                                    onClick={() => actions.deleteFavorite(planet.result.properties.name)} >
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

export default PlanetDetails;
