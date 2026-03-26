
import "../Styles/Banner.css"

function Banner({ image, text }) {
    return (
        <div className="banner">
            <div className="banner-container">

                <img src={image} alt="banner" className="img-banner" />

                {text && <p className="banner-text">{text}</p>}

            </div>
        </div>


    )
}
export default Banner;




