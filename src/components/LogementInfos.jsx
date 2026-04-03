import "../Styles/LogementInfos.css"
import starActive from "../assets/starActive.png"
import starInactive from "../assets/starInactive.png"
import arrow from "../assets/arrow.png"
import { useState } from "react"




function LogementInfos({ logement }) {

    const [openDesc, setOpenDesc] = useState(false)
    const [openEquip, setOpenEquip] = useState(false)

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
                        <img src={Number(logement.rating) >= 1 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 2 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 3 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 4 ? starActive : starInactive} alt="star" />
                        <img src={Number(logement.rating) >= 5 ? starActive : starInactive} alt="star" />
                    </div>
                </div>
            </div>

            <div className="collapse-container">
                <div className="collapse-box">
                    <div className="desc" onClick={() => setOpenDesc(!openDesc)}>
                        <p className="desc-text">Description</p>
                        <img src={arrow} alt="Arrow" className="arrow-img" />
                    </div>
                    {openDesc && (
                        <div className="collapse-content">
                            <p>{logement.description}</p>
                        </div>
                    )}
                </div>
                <div className="collapse-box">
                    <div className="equip" onClick={() => setOpenEquip(!openEquip)}>
                        <p className="equip-text">Équipements</p>
                        <img src={arrow} alt="Arrow" className="arrow-img" />
                    </div>
                    {openEquip && (
                        <div className="collapse-content">
                            <ul>
                                {logement.equipments.map((equipement, index) => (
                                    <li key={index}>{equipement}</li>
                                ))}
                            </ul>
                        </div>
                    )}


                </div>







            </div>






        </div >
    )
}
export default LogementInfos;