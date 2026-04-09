import "../Styles/LogementInfos.css"
import starActive from "../assets/starActive.png"
import starInactive from "../assets/starInactive.png"
import Collapse from "./collapse"




function LogementInfos({ logement }) {


    return (
        <div classame="logement-infos-wrapper">
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
                        {[1, 2, 3, 4, 5].map((star) => (
                            <img
                                key={star}
                                src={Number(logement.rating) >= star ? starActive : starInactive}
                                alt="star"
                                className="star"
                            />
                        ))}

                    </div>
                </div>
            </div>

            <div className="collapse-container">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>

                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>







        </div>







    )
}
export default LogementInfos;