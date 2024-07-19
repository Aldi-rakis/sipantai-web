//import react router dom
import { Link } from "react-router-dom";

function CardSlider(props) {

    const styles = {
        card: {
          width: "200px",
          height: "250px",
          textAlign: 'center',
          
        },
        img: {
          height: "100%", objectFit: "cover", width: "100%", borderRadius: '10px'
        }
      };

 
    return (
       
        <div key={props.id}>
     
            <div style={styles.card} className="mx-3 text-white">
            <Link to={`/places/${props.slug}`} className="text-decoration-none text-dark">
                {props.images.slice(0, 1).map((placeImage, imageIndex) => (
                    <img key={imageIndex} style={styles.img} src={placeImage.image} alt={props.title} />
                ))}
                
                </Link>
            </div>
            <p style={{ textAlign: 'center', fontWeight: "bold", color: "white" }}>{props.title}</p>
           
        </div>
       
    )
}

export default CardSlider;