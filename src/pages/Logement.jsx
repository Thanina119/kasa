import Carrousel from "../components/Carrousel"
import LogementInfos from "../components/LogementInfos"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Logement() {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then((response) => response.json())
            .then((data) => setLogement(data))
            .catch((error) => console.log(error))
    }, [id])

    if (!logement) {
        return <p>Chargement...</p>
    }

    return (
        <div>
            <main className="logement-page">
                <Carrousel pictures={logement.pictures} />
                <LogementInfos logement={logement} />
            </main>
        </div>
    )




}
export default Logement;