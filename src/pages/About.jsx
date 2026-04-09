import "../Styles/About.css"
import bannerImg2 from "../assets/banner-Img2.png"
import Banner from "../components/Banner"
import Collapse from "../components/collapse"


const features = [
    {
        title: "Fiabilité",
        description: "Les annonces postées sur kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de kasa.Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        description: "La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,soit empreinte de reespect ou de bienveillance."
    },
    {
        title: "Securité",
        description: "La sécurité est la priorité de kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hùote qu'au locataire, cela permet à nos équipes de vérifier que les standars sont..."
    }
]




function Apropos() {

    return (
        <main>
            <div>
                <Banner image={bannerImg2} />

            </div>
            <div className="valeurs-container">
                {features.map((feature, index) => (
                    <div className="about-collapse" key={index} >
                        <Collapse title={feature.title}>
                            <p>{feature.description}</p>
                        </Collapse>
                    </div>


                ))}
            </div>


        </main >
    )

}
export default Apropos