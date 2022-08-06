import React from 'react';
import '../Carousel/Carousel.css';
// import { Link } from 'react-router-dom';
import LoadingSpiner from '../LoadingSpinner';

function CarouselFilms(props) {
  const getImgName = (name) => {
    return name.toLowerCase().split(' ').join('-') + '.jpg';
  };
  return (
    <div className="row my-5">
      <h2 className="text-white">{props.title}</h2>
      <div className="col-md-12 carousel">
        {props.section ? (
          props.section.result.map((item, key) => {
            return (
              <div className="card card-home my-4" key={key}>
                <img
                  src={`/img/${getImgName(item.properties.title)}`}
                  className="card-img-top"
                  alt={`${item.properties.title} poster`}
                />
                <div className="card-body">
                  <h4 className="card-text text-white">{item.properties.title}</h4>
                </div>
              </div>
            );
          })
        ) : (
          <LoadingSpiner />
        )}
      </div>
    </div>
  );
}

export default CarouselFilms;
