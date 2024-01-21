import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Appointment, ContactUs, HomePage, MozamNews, Partners, Products } from "../pages";


const NavigationProvider = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/appointment" element={<Appointment/>} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/mozamnews" element={<MozamNews />} />
                </Routes>
            </div>
        </Router>
    )
}

export default NavigationProvider;