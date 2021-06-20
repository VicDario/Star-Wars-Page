import './Carousel.css';
import {Link} from "react-router-dom"
import LoadingSpiner from './LoadingSpinner';

function Carousel (props) {
    return (
        <div className="row my-5">
        <h2 className="text-white">
            {props.title}
            <Link to={`/${props.route}`}><button type="button" className="btn btn-dark">See More</button></Link>
            </h2>
        <div className="col-md-12 carousel">
        {
            !!props.section ?
            (
                props.section.results.map((item, key) => {
                return (
                        <div className="card card-home my-4" key={key} >
                            <img src="https://via.placeholder.com/200/300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-text text-white">{item.name}</h4>
                            </div>
                        </div>
                    );
                })
            ):
            <LoadingSpiner />
        }
        </div>
    </div>
    )
}

export default Carousel;