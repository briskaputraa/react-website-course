import { Routes, Route } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";

import Homepage from "./pages/Homepage";
import Kelaspage from "./pages/Kelaspage";
import Testimonialpage from "./pages/Testimonialpage";
import SyaratKetenpage from "./pages/SyaratKetenpage";
import Faqpage from "./pages/Faqpage";


function App() {
  return ( <div>
  <NavbarComponents/>

    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/kelas" Component={Kelaspage} />
      <Route path="/testimonial" Component={Testimonialpage} />
      <Route path="/faq" Component={Faqpage} />
      <Route path="/syaratketen" Component={SyaratKetenpage} />
    </Routes>

    <FooterComponents/>
  </div>
  );
}

export default App
