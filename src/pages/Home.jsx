import Banner from "../components/Banner"
import "../styles/Home.css"
import Cards from "../components/Cards"
import bannerImg from "../assets/banner-img.png"
import { useEffect, useState } from "react"

function Home() {

    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then((data) => setLogements(data))
            .catch((error) => console.log(error))
    }, [])



    return (
        <main>
            <Banner
                image={bannerImg}
                text="Chez vous, partout et ailleurs"
            />
            <Cards logements={logements} />
        </main>
    )

}
export default Home