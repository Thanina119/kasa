
import { useState } from "react"
import arrow from "../assets/arrow.png"
import "../Styles/Collapse.css"

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse-box">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <p className="collapse-titre">{title}</p>
                <img
                    src={arrow}
                    alt="Arrow"
                    className={isOpen ? "arrow-img open" : "arrow-img"}
                />
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    )
}

export default Collapse