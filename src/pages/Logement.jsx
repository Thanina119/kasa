import Carrousel from "../components/Carrousel"
import LogementInfos from "../components/LogementInfos"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"



function Logement() {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then((response) => {
                if (!response.ok) {
                    navigate("/404")
                    return null
                }
                return response.json()
            })
            .then((data) => {
                if (data) {
                    setLogement(data)
                }
            })
            .catch((error) => {
                navigate("/404")
            })

    }, [id, navigate])



    if (!logement) {
        return null
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