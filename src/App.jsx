import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import About from "./component/About"
import Services from "./component/Services"
import Portfolio from "./component/Portfolio"
import Contact from "./component/Contact"

function App() {
  return (
    <Router>
      {/* Navbar ثابتة */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App