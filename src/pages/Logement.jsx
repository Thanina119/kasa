import Carrousel from "../components/Carrousel"
import LogementInfos from "../components/LogementInfos"
import data from "../data.json"

function Logement() {
    const logement = data[1]

    return (

        <main className="logement-container">
            <Carrousel pictures={logement.pictures} />
            <LogementInfos />

        </main>
    );


}
export default Logement;