//import react router dom
import { Link } from "react-router-dom";

function CardPlace(props) {

    return (
        <div className="col-md-6 mb-4" key={props.id}>
            <Link to={`/places/${props.slug}`} className="text-decoration-none text-dark">
                <div className="card border-0 rounded shadow-sm mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-3">
                            {
                                props.images.slice(0, 1).map((placeImage) => (
                                    <img  src={placeImage.image} className="img-fluid rounded-start" alt="..." style={{ height: "100%", objectFit: "cover",  }} key={placeImage.id} />
                                ))
                            }
                        </div>
                        <div className="col-md-8 shadow-lg rounded">
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <hr />
                                <p className="card-text"><i className="fa fa-map-marker"></i> <i>{props.address}</i></p>
                                <button style={{float: "right"}} className="btn btn-danger mb-3"> Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardPlace;