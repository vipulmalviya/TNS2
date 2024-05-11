import Home from './pages/Home.jsx'
import "./style.css"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';
import SingleMoviePage from './pages/SingleMoviePage.jsx';
import { CuratedPage } from './pages/CuratedPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/WatchlistPage" element={<WatchlistPage />} />
        <Route path="/SingleMoviePage" element={<SingleMoviePage />} />
        <Route path="/CuratedPage" element={<CuratedPage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
