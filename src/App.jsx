import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, ContactUs, AboutUs, Appointment, Products } from "./pages";

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  </Router>
);

export default App;
