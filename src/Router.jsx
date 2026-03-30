import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Logement from "./pages/Logement"
import Error from "./pages/Error"


function Router() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="*/" element={<Error />} />
                    <Route path="/404" element={<Error />} />
                </Routes>
            </div>

            <Footer />
        </BrowserRouter>

    )
}
export default Router