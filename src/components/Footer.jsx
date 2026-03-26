import footerLogo from "../assets/footer-logo.png"
import "../Styles/Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <img src={footerLogo} alt="logo-kasa" className="footer-logo" />
                <p className="footer-text">
                    © 2020 kasa. All rights reserved
                </p>

            </ div>
        </footer>
    )

}
export default Footer 