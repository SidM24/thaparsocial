import './App.css';
import Navbar from './components/NavbarTop';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home ></Home>} />
      </Routes>
    </Router>
  );
}
export default App;
