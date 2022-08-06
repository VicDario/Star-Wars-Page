import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../../stores/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './CharacterDetails.css';
import LoadingSpiner from '../../components/LoadingSpinner';

function CharacterDetails() {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const { character, favorites } = store;

  useEffect(() => {
    actions.getCharacter(`https://www.swapi.tech/api/people/${params.id}`);
  }, []);

  const getImgName = (name) => {
    return name.toLowerCase().split(' ').join('-').split('/').join('-') + '.jpg';
  };

  return (
    <div className="container">
      {!!character &&
      character.data.result.properties.name.split(' ').join('').toLowerCase() === params.name ? (
        <div className="row my-5 mx-2 card-details p-0">
          <div className="col-md-6 col-sm-12 p-0">
            <img
              className="img-details"
              src={`/img/${getImgName(character.data.result.properties.name)}`}
              alt={character.data.result.properties.name}
            />
          </div>
          <div className="col-md-6 col-sm-12 details pt-4">
            <h1 className="text-white">{character.data.result.properties.name}</h1>
            <ul className="list-details text-white text-capitalize ">
              <li className="d-flex justify-content-between">
                <span>Gender:</span>
                <span>{character.data.result.properties.gender}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Mass:</span>
                <span>{character.data.result.properties.mass}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Hair color:</span>
                <span>{character.data.result.properties.hair_color}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Eyes color:</span>
                <span>{character.data.result.properties.eye_color}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Skin color:</span>
                <span>{character.data.result.properties.skin_color}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Birth year:</span>
                <span>{character.data.result.properties.birth_year}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Home planet:</span>{' '}
                {character.planet ? (
                  <Link
                    className="text-info"
                    to={`/planets/${character.planet.result.properties.name
                      .split(' ')
                      .join('')
                      .toLowerCase()}/${character.planet.result.uid}`}
                  >
                    {character.planet.result.properties.name}
                  </Link>
                ) : (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </li>
            </ul>
            <div className="buttons d-flex justify-content-between">
              <Link to="/people" className="btn-link">
                <button type="button" className="btn btn-light mb-4">
                  Back to Characters
                </button>
              </Link>
              {favorites.indexOf(character.data.result.properties.name) === -1 ? (
                <button
                  type="button"
                  className="btn-like btn btn-light mb-4"
                  onClick={() => actions.addFavorite(character.data.result.properties.name)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-like-active btn btn-light mb-4"
                  onClick={() => actions.deleteFavorite(character.data.result.properties.name)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="my-5">
          <LoadingSpiner />
        </div>
      )}
    </div>
  );
}

export default CharacterDetails;
