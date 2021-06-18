import './Carousel.css';
import {Link} from "react-router-dom"

function Carousel (props) {
    return (
        <div className="row my-5">
        <h2 className="text-white">
            {props.title}
            <Link to={`/${props.title.toLowerCase()}`}><button type="button" class="btn btn-dark">See More</button></Link>
            </h2>
        <div className="col-md-12 carousel">
    {
        !!props.section ?
        (
            props.section.results.map((item, key) => {
            return (
                    <div className="card my-4" key={key} >
                        <img src="https://via.placeholder.com/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text text-white">{item.name}</h4>
                        </div>
                    </div>
                );
            })
        ):(
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        )
    }
        </div>
    </div>
    )
}

export default Carousel;