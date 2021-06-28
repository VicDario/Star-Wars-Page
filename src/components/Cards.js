import { Link } from 'react-router-dom';
import './Cards.css'

function Cards (props) {
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    }
    return (
        !!props.elements &&
        props.elements.results.map((element, key) => {
            return (
                <div className="col-md-4 col-sm-6 my-4" key={key}>
                    <Link to={`${props.route}/${element.name.split(" ").join("").toLowerCase()}/${element.uid}`} >
                        <div className="card card-page">
                            <img src={`/img/${getImgName(element.name)}`} className="card-img-top" alt={element.name} />
                            <div className="card-body">
                                <h4 className="card-text text-white">{element.name}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            ) 
        })
    );
}

export default Cards;