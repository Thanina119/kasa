import "../Styles/LogementInfos.css"
import host from "../assets/host.png"
import rate from "../assets/Rate.png"
import arrow from "../assets/arrow.png"

function LogementInfos() {
    return (
        <div>
            <div className="infos-logement" >
                <div className="bloc1">
                    <div className="title-loc" >
                        <p className="logement-title" >Cozy loft on the Canal Saint-Martain</p>
                        <p className="logement-loc" >Paris, Île-de-France</p>
                    </div >

                    <div className="tags">
                        <span>Cozy</span>
                        <span>Canal</span>
                        <span>Paris 10</span>
                    </div>
                </div>


                <div className="bloc2">
                    <div className="host">
                        <p className="host-name" >Alexandre Dumas</p>
                        <img src={host} alt="Host" className="host-img" />

                    </div>

                    <div className="rating">
                        <img src={rate} alt="Rate" className="rating" />
                    </div>
                </div>
            </div>



            <div className="details-logement">
                <div className="bloc3">
                    <div className="desc">
                        <p className="desc-text">Description</p>
                        <img src={arrow} alt="Arrow" className="arrow-img" />
                    </div>

                    <div className="equip">
                        <p className="equip-text">Équipments</p>
                        <img src={arrow} alt="Arrow" className="arrow-img" />

                    </div>


                </div>
            </div>
        </div>

    )
}
export default LogementInfos;