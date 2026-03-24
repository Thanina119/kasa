import data from "../data.json"
import "../Styles/Cards.css"


function Cards() {
    return (
        <div className="cards">
            <div className="cards-container">
                {data.slice(0, 6).map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.cover} alt={item.title} className="card-img" />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Cards