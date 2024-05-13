import Home from './pages/Home.jsx';
import "./style.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';
import SingleMoviePage from './pages/SingleMoviePage.jsx';
import { CuratedPage } from './pages/CuratedPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';


function App() {
  const location = useLocation();

  const showMainNavBar = location.pathname !== '/login' && location.pathname !== '/';
  const showFooter = location.pathname !== '/login' && location.pathname !== '/';

  return (
    <>
      {showMainNavBar ? <Nav /> : null}
      <Routes location={location}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Register />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/WatchlistPage" element={<WatchlistPage />} />
        <Route path="/SingleMoviePage" element={<SingleMoviePage />} />
        <Route path="/CuratedPage" element={<CuratedPage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
      </Routes>
      {showFooter ? <Footer /> : null}
    </>
  );
}

export default App;
