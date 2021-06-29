import { useParams, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../stores/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./CharacterDetails.css";
import LoadingSpiner from "../components/LoadingSpinner";

function VehicleDetails(props) {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { vehicle, favorites } = store;

    useEffect(() => {
        actions.getVehicle(`https://www.swapi.tech/api/vehicles/${params.id}`);
    }, []);

    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-").split("/").join("-") + ".jpg";
    }

    return (
        <div className="container">
            {!!vehicle && 
                vehicle.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                <div className="row my-5 mx-2 card-details p-0">
                    <div className="col-md-6 col-sm-12 p-0">
                                <img
                                    className="img-details"
                                    src={`/img/${getImgName(vehicle.result.properties.name)}`}
                                    alt={vehicle.result.properties.name}
                                />
                    </div>
                    <div className="col-md-6 col-sm-12 details pt-4">
                            <h1 className="text-white">{vehicle.result.properties.name}</h1>
                            <ul className="list-details text-white text-capitalize ">
                                <li className="d-flex justify-content-between">
                                    <span>Model:</span><span>{vehicle.result.properties.model}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>vehicle class:</span><span>{vehicle.result.properties.vehicle_class}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Manufacturer:</span><span>{vehicle.result.properties.manufacturer}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                   <span>Cost in credits:</span><span>{vehicle.result.properties.cost_in_credits}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Length:</span><span>{vehicle.result.properties.length}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Crew:</span><span>{vehicle.result.properties.crew}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Passengers:</span><span>{vehicle.result.properties.passengers}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Max atmosphering speed:</span><span>{vehicle.result.properties.max_atmosphering_speed}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Consumables:</span><span>{vehicle.result.properties.consumables}</span>
                                </li>
                            </ul>
                            <div className="buttons d-flex justify-content-between">
                                <Link to="/vehicles" className="btn-link">
                                    <button type="button" className="btn btn-light mb-4">Back to Vehicles</button>
                                </Link>
                                {   (favorites.indexOf(vehicle.result.properties.name) === -1) ?
                                    (
                                    <button type="button" className="btn-like btn btn-light mb-4" 
                                    onClick={() => actions.addFavorite(vehicle.result.properties.name)} >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    ) : (
                                    <button type="button" className="btn-like-active btn btn-light mb-4" 
                                    onClick={() => actions.deleteFavorite(vehicle.result.properties.name)} >
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

export default VehicleDetails;
