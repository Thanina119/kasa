import "../Styles/LogementInfos.css"
import starActive from "../assets/starActive.png"
import starInactive from "../assets/starInactive.png"


function LogementInfos({ logement }) {
    return (
        <div>
            <div className="infos-logement" >
                <div className="log-title">
                    <div className="title-loc" >
                        <p className="logement-title" >{logement.title}</p>
                        <p className="logement-loc" >{logement.location}</p>
                    </div >

                    <div className="tags-container">

                        {logement.tags.map((tag) => (

                            <span className="tags" key={tag}>{tag}</span>

                        ))}

                    </div>
                </div>


                <div className="details-host">
                    <div className="host">
                        <p className="host-name" >{logement.host.name}</p>
                        <img src={logement.host.picture} alt="logement.host.name" className="host-img" />

                    </div>

                    <div className="rating">
                        <img src={Number(logement.rating) >= 1 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 2 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 3 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 4 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 5 ? starActive : starInactive} alt="star" />
                    </div>
                </div>
            </div>
        </div >




    )
}
export default LogementInfos;