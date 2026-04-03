import "../Styles/About.css"
import bannerImg2 from "../assets/banner-Img2.png"
import Banner from "../components/Banner"
import arrowUp from "../assets/arrowUp.png"
import { useState } from "react"


function Apropos() {

    const [openFiabilite, setOpenFiabilite] = useState(false)
    const [openRespect, setOpenRespect] = useState(false)
    const [openService, setOpenService] = useState(false)
    const [openSecurite, setOpenSecurite] = useState(false)


    return (
        <main>
            <div>
                <Banner image={bannerImg2} />

            </div>

            <div className="valeurs-container">
                <div className="valeurs-collapse">

                    <div className="collapse-header" onClick={() => setOpenFiabilite(!openFiabilite)}>
                        <p>Fiabilité</p>

                        <img src={arrowUp} alt="ouvrir collapse" />
                    </div>

                    {openFiabilite && (

                        <div className="collapse-content">
                            <p>Les annonces postées sur kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                        </div>
                    )}
                </div>



                <div className="valeurs-collapse">

                    <div className="collapse-header" onClick={() => setOpenRespect(!openRespect)}>
                        <p>Respect</p>

                        <img src={arrowUp} alt="ouvrir collapse" />
                    </div>

                    {openRespect && (

                        <div className="collapse-content">
                            <p>La bienveillance fait partie des valeurs fondatrices de kasa.Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    )}
                </div>

                <div className="valeurs-collapse">

                    <div className="collapse-header" onClick={() => setOpenService(!openService)}>
                        <p>Service</p>

                        <img src={arrowUp} alt="ouvrir collapse" />
                    </div>

                    {openService && (

                        <div className="collapse-content">
                            <p>La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,soit empreinte de reespect ou de bienveillance.</p>
                        </div>
                    )}

                </div>

                <div className="valeurs-collapse">
                    <div className="collapse-header" onClick={() => setOpenSecurite(!openSecurite)}>
                        <p>Sécurité</p>

                        <img src={arrowUp} alt="ouvrir collapse" />
                    </div>

                    {openSecurite && (

                        < div className="collapse-content">
                            <p>La sécurité est la priorité de kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hùote qu'au locataire, cela permet à nos équipes de vérifier que les standars sont...</p>
                        </div>
                    )}
                </div>



            </div>

        </main >
    )

}
export default Apropos