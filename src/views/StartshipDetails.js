import { useParams, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../stores/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./CharacterDetails.css";
import LoadingSpiner from "../components/LoadingSpinner";

function StarshipDetails(props) {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { starship, favorites } = store;

    useEffect(() => {
        actions.getStarship(`https://www.swapi.tech/api/starships/${params.id}`);
    }, []);

    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-").split("/").join("-") + ".jpg";
    }

    return (
        <div className="container">
            {!!starship && 
                starship.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                <div className="row my-5 mx-2 card-details p-0">
                    <div className="col-md-6 col-sm-12 p-0">
                                <img
                                    className="img-details"
                                    src={`/img/${getImgName(starship.result.properties.name)}`}
                                    alt={starship.result.properties.name}
                                />
                    </div>
                    <div className="col-md-6 col-sm-12 details pt-4">
                            <h1 className="text-white">{starship.result.properties.name}</h1>
                            <ul className="list-details text-white text-capitalize ">
                                <li className="d-flex justify-content-between">
                                    <span>Model:</span><span>{starship.result.properties.model}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Starship class:</span><span>{starship.result.properties.starship_class}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Manufacturer:</span><span>{starship.result.properties.manufacturer}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                   <span>Cost in credits:</span><span>{starship.result.properties.cost_in_credits}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Length:</span><span>{starship.result.properties.length}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Crew:</span><span>{starship.result.properties.crew}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Passengers:</span><span>{starship.result.properties.passengers}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Max atmosphering speed:</span><span>{starship.result.properties.max_atmosphering_speed}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Hyperdrive rating:</span><span>{starship.result.properties.hyperdrive_rating}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>MGLT:</span><span>{starship.result.properties.MGLT}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Cargo capacity:</span><span>{starship.result.properties.cargo_capacity}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Consumables:</span><span>{starship.result.properties.consumables}</span>
                                </li>
                            </ul>
                            <div className="buttons d-flex justify-content-between">
                                <Link to="/starships" className="btn-link">
                                    <button type="button" className="btn btn-light mb-4">Back to Starships</button>
                                </Link>
                                {   (favorites.indexOf(starship.result.properties.name) === -1) ?
                                    (
                                    <button type="button" className="btn-like btn btn-light mb-4" 
                                    onClick={() => actions.addFavorite(starship.result.properties.name)} >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    ) : (
                                    <button type="button" className="btn-like-active btn btn-light mb-4" 
                                    onClick={() => actions.deleteFavorite(starship.result.properties.name)} >
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

export default StarshipDetails;
