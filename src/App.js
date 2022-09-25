import BasicExample from "./components/Navbar.js";
import "./App.css";
import Textfield from "./components/textfield.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import About from './Pages/about.js'

function App() {
  return (
    
    <>
    <Router>
      <BasicExample title={"TextCalculator"} />
      <div className="container" my-3>
      <Routes>
        <Route path="/about" element = {<About />}>
        </Route>
        <Route index element={<Textfield heading={"Enter your text here"} />} />
           
      </Routes>
      </div>
      </Router>
    </>
    
  );
}

export default App;
