import "./App.css";
import {BrowserRouter as Router,Routes,Route,useNavigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import Home from "./components/Home"; 
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import PageCertification from "./components/PageCertification";
import PageEducation from "./components/PageEducation";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <Fragment>
      <Router>
      <Navbar />
      <div className="App">

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/portfolio' element={<Portfolio />} /> 
          <Route exact path='/page_education' element={<PageEducation />} />
          <Route exact path='/page_certification' element={<PageCertification />} />
        </Routes>
  
      </div>
      </Router>
    </Fragment>
  );
}

export default App;
