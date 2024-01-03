import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, ContactUs, AboutUs, Appointment, Products, Partners, MozamNews } from "./pages";

const App = () => (
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
);

export default App;
