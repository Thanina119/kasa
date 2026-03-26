import { Link } from "react-router-dom"
import "../Styles/Cards.css"


function Cards({ logements }) {
    return (
        <div className="cards">
            <div className="cards-container">
                {logements.map((item) => (
                    <Link to={`/logement/${item.id}`} key={item.id} className="card">

                        <img src={item.cover} alt={item.title} className="card-img" />
                        <p>{item.title}</p>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Cards