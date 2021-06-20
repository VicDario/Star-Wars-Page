import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../stores/AppContext";
import "./CharacterDetails.css";
import LoadingSpiner from "../components/LoadingSpinner";

function CharacterDetails(props) {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { character } = store;

    useEffect(() => {
        actions.getCharacter(`https://www.swapi.tech/api/people/${params.id}`);
    }, []);

    return (
        <div className="container">
            {!!character && 
                character.data.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                <div className="row my-5 mx-2 card-details p-0">
                    <div className="col-md-6 col-sm-12 p-0">
                                <img
                                    className="img-details"
                                    src="https://via.placeholder.com/500/500"
                                    alt={character.data.result.properties.name}
                                />
                    </div>
                    <div className="col-md-6 col-sm-12 details pt-4">
                            <h1 className="text-white">{character.data.result.properties.name}</h1>
                            <ul className="list-details text-white text-capitalize ">
                                <li className="d-flex justify-content-between">
                                    <span>Gender:</span><span>{character.data.result.properties.gender}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Mass:</span><span>{character.data.result.properties.mass}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Hair color:</span><span>{character.data.result.properties.hair_color}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                   <span>Eyes color:</span><span>{character.data.result.properties.eye_color}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Skin color:</span><span>{character.data.result.properties.skin_color}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Birth year:</span><span>{character.data.result.properties.birth_year}</span>
                                </li>
                               <li className="d-flex justify-content-between">
                                    <span>Home planet:</span> {!!character.planet ? 
                                        <Link className="text-info" to={`/planets/${character.planet.result.properties.name.split(" ").join("").toLowerCase()}/${character.planet.result.uid}`} >
                                        {character.planet.result.properties.name}
                                        </Link> :
                                        <div class="spinner-border text-light" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>}
                                </li>
                            </ul>
                            <Link to="/people">
                                <button type="button" className="back-button btn btn-light mb-4">Back to Characters</button>
                            </Link>
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

export default CharacterDetails;
