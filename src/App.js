import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import {Home,About,Project,Contact} from "./components/pages/page";


function App() {
  return (
    <main>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
