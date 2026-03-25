import { useState } from "react"
import arrowRight from "../assets/arrowRight.png"
import arrowLeft from "../assets/arrowLeft.png"
import "../Styles/Carrousel.css"


function Carrousel({ pictures }) {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((index + 1) % images.length)
    }

    const prev = () => {
        setIndex((index - 1 + images.length) % images.length)
    }

    const images = pictures.slice(0, 4)
    return (

        <div className="carrousel">

            <button className="left" onClick={prev}>
                <img src={arrowLeft} alt="left" />
            </button>


            <img className="image" src={images[index]} alt="logement" />


            <button className="right" onClick={next}>
                <img src={arrowRight} alt="right" />
            </button>

            <p className="text" >{index + 1} /{images.length}</p>
        </div >
    )
}
export default Carrousel;