import bannerImg from "../assets/banner-img.png"
import "../Styles/Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="banner-container">

                <img src={bannerImg} alt="banner-image" className="img-banner" />

                <p className="banner-text">
                    Chez vous, partout et ailleurs
                </p>
            </div>
        </div>


    )
}
export default Banner;




