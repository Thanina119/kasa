import Carrousel from "../components/Carrousel"
import LogementInfos from "../components/LogementInfos"
import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"



function Logement() {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then((response) => {
                if (!response.ok) {
                    setNotFound(true)
                    return null
                }
                return response.json()
            })
            .then((data) => {
                if (data) {
                    setLogement(data)
                }
            })
            .catch(() => setNotFound(true))

    }, [id])

    if (notFound) {
        return <Navigate to="/404" />
    }
    if (!logement) {
        return <p>Chargement..</p>
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