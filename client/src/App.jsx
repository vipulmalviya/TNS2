import Home from './pages/Home.jsx'
import "./App.css"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
