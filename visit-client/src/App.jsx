import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import './app.css'; 
import Home from './pages/home';
import Culture from './pages/culture';
import Destination from './pages/destination';
import News from './pages/news';
import Contacts from './pages/contacts';
import Accomodation from './pages/accomodation';
import Iteneraries from './pages/iteneraries';
import Transportation from './pages/transportation';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/iteneraries" element={<Iteneraries />} />
        <Route path="/transportation" element={<Transportation />} />
      </Routes>
    </Router>
  );
};

export default App;
