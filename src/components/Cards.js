import './Cards.css'

function Cards (props) {
    return (
        !!props.elements &&
        props.elements.results.map((element, key) => {
            return (
                <div className="col-md-4 col-sm-6 my-4" key={key}>
                    <div className="card card-page">
                        <img src="https://via.placeholder.com/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text text-white">{element.name}</h4>
                        </div>
                    </div>
                </div>
            ) 
        })
    );
}

export default Cards;