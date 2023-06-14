import { Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

import './App.css';

import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about" >About</Link></Nav.Link>
            <Nav.Link><Link to="/user" >User</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/user" exact element={<User />} />
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
