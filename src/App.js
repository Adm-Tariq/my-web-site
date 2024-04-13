
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./screen/Home"
import About from "./screen/About"
import Projects from "./screen/Projects"
import ContactMe from "./screen/ContactMe"

import "./styles/general.css"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/" element={<About />} >
            <Route path="/" element={<Projects />}>
              <Route path="/" element={<ContactMe />} />
            </Route>
          </Route>
        </Route>
      </Routes>

      <Footer />
    </>

  );
}

export default App;
